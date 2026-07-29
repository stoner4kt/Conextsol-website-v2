/**
 * Cloudflare Worker - Contact Form Handler
 * Receives JSON from the website contact form and forwards it to Telegram.
 *
 * Required environment variables (set in Cloudflare Dashboard, Workers, Settings, Variables):
 *   TELEGRAM_BOT_TOKEN - from BotFather on Telegram
 *   TELEGRAM_CHAT_ID   - from userinfobot on Telegram
 */

const ALLOWED_ORIGIN = "*"; // Restrict to your production domain

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders(), "Content-Type": "application/json" },
      });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { ...corsHeaders(), "Content-Type": "application/json" },
      });
    }

    const lines = ["New Contact Form Submission", ""];
    for (const [key, value] of Object.entries(body)) {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      lines.push(label + ": " + String(value).trim());
    }
    const text = lines.join("\n");

    try {
      const telegramRes = await fetch(
        "https://api.telegram.org/bot" + env.TELEGRAM_BOT_TOKEN + "/sendMessage",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: env.TELEGRAM_CHAT_ID,
            text: text,
          }),
        }
      );

      if (!telegramRes.ok) {
        return new Response(JSON.stringify({ success: false, error: "Telegram delivery failed" }), {
          status: 500,
          headers: { ...corsHeaders(), "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders(), "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: "Internal server error" }), {
        status: 500,
        headers: { ...corsHeaders(), "Content-Type": "application/json" },
      });
    }
  },
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
