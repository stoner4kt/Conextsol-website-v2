import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <SEOHead 
        title="Privacy Policy | Conextsol"
        description="Read our Privacy Policy to understand how Conextsol collects, uses, and protects your data in compliance with POPIA."
      />
      
      <section className="pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8"><strong>Effective Date:</strong> March 1, 2026</p>
            
            <p>
              Conextsol ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you, specifically under the Protection of Personal Information Act (POPIA) of South Africa.
            </p>

            <h2>1. Important Information and Who We Are</h2>
            <p>
              This website is operated by Conextsol, a web design and software development studio based in South Africa. If you have any questions about this privacy policy or our privacy practices, please contact us at hello@conextsol.co.za.
            </p>

            <h2>2. The Data We Collect About You</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul>
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
            </ul>

            <h2>3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2>5. Your Legal Rights</h2>
            <p>
              Under POPIA, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul>
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
            </ul>
            <p>
              If you wish to exercise any of the rights set out above, please contact us.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
