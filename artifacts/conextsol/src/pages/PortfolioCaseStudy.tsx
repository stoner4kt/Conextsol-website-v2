import { Link, useRoute } from 'wouter';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { CTABanner } from '@/components/sections/CTABanner';
import { portfolio } from '@/data/portfolio';
import NotFound from '@/pages/not-found';

export default function PortfolioCaseStudy() {
  const [, params] = useRoute('/portfolio/:id');
  const project = portfolio.find((item) => item.id === params?.id);

  if (!project) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEOHead
        title={`${project.clientType} Case Study | Conextsol Portfolio`}
        description={`${project.description} Result: ${project.keyMetric}.`}
      />

      <section className="pt-24 pb-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <Link href="/portfolio" className="inline-flex items-center text-primary font-bold hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="text-secondary font-bold text-sm mb-3 uppercase tracking-wider">{project.industry} Case Study</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">{project.clientType}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{project.description}</p>
              <div className="inline-flex flex-col rounded-2xl border border-primary/30 bg-primary/10 p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Key Result</span>
                <span className="text-2xl font-black text-foreground">{project.keyMetric}</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="overflow-hidden rounded-3xl border border-border shadow-2xl">
              <img src={project.imageUrl} alt={`${project.clientType} case study`} className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <article className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </article>
            <article className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </article>
            <article className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Outcome</h2>
              <ul className="space-y-4">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to build a project like this?" />
    </Layout>
  );
}
