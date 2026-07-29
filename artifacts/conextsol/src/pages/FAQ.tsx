import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { CTABanner } from '@/components/sections/CTABanner';
import { faqCategories } from '@/data/faq';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'framer-motion';

export default function FAQ() {
  return (
    <Layout>
      <SEOHead 
        title="Frequently Asked Questions | Conextsol"
        description="Find answers to common questions about our web design, custom software development, pricing, and process."
      />
      
      <section className="pt-24 pb-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Everything you need to know about working with us.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${catIdx}-${idx}`} className="border-border">
                    <AccordionTrigger className="text-lg font-bold text-left hover:text-primary transition-colors">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <CTABanner title="Still have questions?" subtitle="Reach out directly and our team will get back to you immediately." />
    </Layout>
  );
}
