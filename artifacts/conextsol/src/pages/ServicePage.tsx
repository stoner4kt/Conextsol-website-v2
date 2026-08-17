import { useParams, Link } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { CTABanner } from '@/components/sections/CTABanner';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Layout as LayoutIcon, Code2, TerminalSquare, Figma, ShoppingCart, Wrench, TrendingUp, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import NotFound from './not-found';

function parseZarPrice(text: string) {
  const match = text.match(/R\s?([0-9,]+)/);
  return match ? match[1].replace(/,/g, '') : undefined;
}

const iconMap: Record<string, any> = {
  Layout: LayoutIcon,
  Code2: Code2,
  TerminalSquare: TerminalSquare,
  Figma: Figma,
  ShoppingCart: ShoppingCart,
  Wrench: Wrench,
  TrendingUp: TrendingUp,
  Server: Server
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  const Icon = iconMap[service.icon] || LayoutIcon;
  const offerPrice = parseZarPrice(service.faq.map((item) => `${item.question} ${item.answer}`).join(' '));

  // Generate Service & FAQPage Schema.org structured data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.shortTitle,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Conextsol",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cape Town",
        "addressCountry": "ZA"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Cape Town" },
      { "@type": "City", "name": "Johannesburg" },
      { "@type": "City", "name": "Durban" },
      { "@type": "City", "name": "Pretoria" },
      { "@type": "Country", "name": "South Africa" }
    ],
    ...(offerPrice ? {
      "offers": {
        "@type": "Offer",
        "price": offerPrice,
        "priceCurrency": "ZAR"
      }
    } : {})
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <Layout>
      <SEOHead 
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalUrl={`/services/${service.slug}`}
        schema={[serviceSchema, faqSchema]}
      />
      
      {/* Hero */}
      <section className="pt-24 pb-20 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-[-10%] w-[50%] h-[150%] bg-primary/20 blur-[120px] rounded-full rotate-12" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8"
            >
              <Icon className="w-10 h-10 text-primary" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              {service.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              {service.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" className="h-14 px-8 text-lg font-bold" asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-2/3">
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {service.longDescription}
                </p>
                
                <div className="mt-12 p-8 bg-muted/50 rounded-2xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Who is this for?</h3>
                  <p className="text-muted-foreground m-0">{service.targetAudience}</p>
                </div>
              </div>

              {/* Our Process */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-8">How We Work</h2>
                <div className="space-y-8">
                  {[
                    { title: "Discovery", desc: "Understanding your exact needs and business goals." },
                    { title: "Strategy & Design", desc: "Crafting the blueprint and visual approach." },
                    { title: "Development & Setup", desc: "Building out the solution with modern technologies and rigorous testing." },
                    { title: "Launch & Support", desc: "Deploying safely and providing ongoing optimization and maintenance." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary font-bold text-lg rounded-full flex items-center justify-center">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                        <p className="text-muted-foreground">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {service.faq.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
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
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 bg-card border border-border rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-foreground mb-6">What's Included</h3>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-6 bg-muted/50 rounded-2xl mb-8">
                  <div className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Pricing</div>
                  <p className="text-muted-foreground">Custom pricing based on scope. Contact us for an itemized proposal.</p>
                </div>

                <Button className="w-full h-14 text-lg font-bold mb-4" asChild>
                  <Link href="/contact">Get a Custom Quote</Link>
                </Button>
                <Link href="/portfolio" className="flex items-center justify-center w-full py-4 text-primary font-bold hover:bg-primary/5 rounded-lg transition-colors">
                  View Our Work <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
