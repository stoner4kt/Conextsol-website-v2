import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { CTABanner } from '@/components/sections/CTABanner';
import { CaseStudyCard } from '@/components/portfolio/CaseStudyCard';
import { portfolio } from '@/data/portfolio';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <Layout>
      <SEOHead 
        title="Our Work | Portfolio"
        description="View our recent web design and custom software projects built for businesses across South Africa. Real results for real companies."
      />
      
      <section className="pt-24 pb-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Websites and software built to perform. Here is how we have helped South African businesses digitize, automate, and grow.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((study, idx) => (
              <CaseStudyCard key={study.id} {...study} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="See your business here next?" />
    </Layout>
  );
}
