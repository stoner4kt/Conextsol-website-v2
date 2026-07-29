# Cloudflare Worker & Contact Form Deployment Guide

This guide walks you through setting up and deploying the Cloudflare Worker that receives contact form inquiries from the Conextsol website and forwards them directly to your Telegram chat.

---

## Deployment Checklist

### Step 1: Obtain `TELEGRAM_BOT_TOKEN`
1. Open Telegram and search for [@BotFather](https://t.me/BotFather).
2. Start a chat and send `/newbot`.
3. Follow the prompts to choose a name and username for your bot.
4. Copy the HTTP API Access Token provided by BotFather (e.g., `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`).

### Step 2: Obtain `TELEGRAM_CHAT_ID`
1. Open Telegram and search for [@userinfobot](https://t.me/userinfobot) or [@raw_data_bot](https://t.me/raw_data_bot).
2. Start a chat and it will reply with your personal user `Id` (e.g., `123456789`).
3. Send a message to your new bot (created in Step 1) so it has permission to message you.

### Step 3: Configure Worker Environment Variables in Cloudflare
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > Select `contact-form-worker` (or create it if deploying manually for the first time).
3. Go to **Settings** > **Variables and Secrets**.
4. Add the following secrets:
   - `TELEGRAM_BOT_TOKEN` = *<Your Bot Token from Step 1>*
   - `TELEGRAM_CHAT_ID` = *<Your Chat ID from Step 2>*
5. Click **Save and Deploy**.

### Step 4: Create Cloudflare API Token for GitHub Actions
1. In Cloudflare, go to **My Profile** (top right) > **API Tokens**.
2. Click **Create Token**.
3. Select the **Edit Cloudflare Workers** template (or custom token with `Account -> Workers Scripts -> Edit` and `Account -> Account Details -> Read`).
4. Copy the generated API Token.

### Step 5: Add `CLOUDFLARE_API_TOKEN` to GitHub Secrets
1. Go to your GitHub Repository (`https://github.com/stoner4kt/Conextsol-website-v2`).
2. Navigate to **Settings** > **Secrets and variables** > **Actions**.
3. Click **New repository secret**.
4. Set Name: `CLOUDFLARE_API_TOKEN`
5. Set Value: *<Paste the API Token from Step 4>*
6. Click **Add secret**.

### Step 6: Update the Worker URL in Frontend
1. Once deployed, Cloudflare will assign your Worker a URL, for example:
   `https://contact-form-worker.<your-subdomain>.workers.dev`
2. Update the `WORKER_URL` in `artifacts/conextsol/src/pages/Contact.tsx` on line 20:
   ```typescript
   const WORKER_URL = import.meta.env.VITE_WORKER_URL || "https://contact-form-worker.<your-subdomain>.workers.dev";
   ```
   *(Alternatively, set `VITE_WORKER_URL` in your build environment variables / Cloudflare Pages).*

### Step 7: End-to-End Test
1. Run the application or visit the live site.
2. Go to the **Contact** page (`/contact`).
3. Fill out the contact form fields and submit.
4. Verify:
   - The submit button shows **"Sending..."** with a loading spinner while submitting.
   - A success message appears on screen: *"Message sent! We will get back to you shortly."*
   - Check your Telegram app: a new notification should arrive instantly with all form details!
