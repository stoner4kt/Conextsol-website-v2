import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';

export default function TermsOfService() {
  return (
    <Layout>
      <SEOHead 
        title="Terms of Service | Conextsol"
        description="Read the Terms of Service for engaging with Conextsol for web design and development services in South Africa."
      />
      
      <section className="pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-8"><strong>Effective Date:</strong> March 1, 2026</p>
            
            <p>
              These Terms of Service ("Terms") govern your use of the Conextsol website and the services provided by Conextsol. By accessing our website or engaging our services, you agree to be bound by these Terms.
            </p>

            <h2>1. Service Delivery and Scope</h2>
            <p>
              Conextsol provides web design, web development, custom software development, and related digital services. The specific scope, deliverables, timeline, and cost for any project will be detailed in a separate Statement of Work (SOW) or formal proposal agreed upon by both parties.
            </p>

            <h2>2. Payment Terms</h2>
            <ul>
              <li>A standard deposit of 50% is required before any project work commences unless otherwise specified in the SOW.</li>
              <li>Invoices are payable within 7 days of receipt.</li>
              <li>Conextsol reserves the right to suspend services or withhold final deliverables (including website launch or code handover) until full payment is received.</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>
              Upon final and full payment for the project, the intellectual property rights to the custom code, designs, and content produced specifically for the client are transferred to the client. Conextsol retains the right to use the completed project in its portfolio and marketing materials. We also retain ownership of any underlying pre-existing code libraries or frameworks used across multiple projects.
            </p>

            <h2>4. Client Responsibilities</h2>
            <p>
              The timely delivery of any project relies on the client providing necessary assets, content, and feedback promptly. Delays caused by the client may result in adjusted timelines. If a project stalls for more than 30 days due to client inaction, Conextsol reserves the right to invoice for work completed to date.
            </p>

            <h2>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by South African law, Conextsol shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services or website.
            </p>

            <h2>6. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising out of or relating to these Terms or our services shall be resolved in the competent courts of South Africa.
            </p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting to the website. Your continued use of our services constitutes your acceptance of the revised Terms.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
