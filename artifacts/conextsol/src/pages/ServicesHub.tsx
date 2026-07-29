import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { CTABanner } from '@/components/sections/CTABanner';
import { services } from '@/data/services';
import { Layout as LayoutIcon, Code2, TerminalSquare, Figma, ShoppingCart, Wrench, TrendingUp, Server, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

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

export default function ServicesHub() {
  return (
    <Layout>
      <SEOHead 
        title="Web Design, Development, Google Ads & Managed Hosting Services"
        description="Explore Conextsol's full suite of digital services in Cape Town & South Africa: web design, custom software development, Google Ads management, e-commerce, and managed cloud hosting."
        canonicalUrl="/services"
      />
      
      {/* Header */}
      <section className="pt-24 pb-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Digital Services in Cape Town & South Africa
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            We provide end-to-end digital solutions for South African businesses. Whether you need a high-converting website, bespoke software, in-house Google Ads management, or managed cloud hosting, we have the technical expertise to deliver.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || LayoutIcon;
              return (
                <motion.div 
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start text-muted-foreground text-sm">
                          <span className="mr-3 text-secondary mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                    <Link href={`/services/${service.slug}`} className="font-bold text-primary hover:text-secondary transition-colors inline-flex items-center">
                      View Service Details <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to upgrade your digital presence?" />
    </Layout>
  );
}
