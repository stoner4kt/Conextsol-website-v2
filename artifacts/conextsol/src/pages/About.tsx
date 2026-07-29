import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { CTABanner } from '@/components/sections/CTABanner';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '@assets/about.jpg';

export default function About() {
  return (
    <Layout>
      <SEOHead 
        title="About Conextsol | South African Web Development Partner"
        description="Learn about Conextsol, our mission, and why South African businesses trust us to build their websites and custom software."
      />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-muted/30 border-b border-border overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Your South African Web Development Partner
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We are a boutique studio of designers and engineers who believe that every business deserves digital assets that actually work for them.
            </motion.p>
          </div>
          <div className="flex-1 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={aboutImg} alt="Conextsol Team Concept" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p>
              Conextsol was founded with a simple observation: South African SMEs and startups were paying for websites that didn't do anything. They looked okay, but they were slow, insecure, and failed to generate actual leads or sales.
            </p>
            <p>
              We decided to build an agency focused entirely on <strong>outcomes</strong>. We brought together deep expertise in UI/UX design, modern React/Node.js development, and technical SEO to offer a full-stack solution.
            </p>
            
            <div className="my-12 p-8 bg-primary/5 border-l-4 border-primary rounded-r-xl">
              <h3 className="text-2xl font-bold text-foreground m-0 mb-2">Our Mission</h3>
              <p className="m-0 text-muted-foreground">
                To equip South African businesses with world-class digital tools that automate their processes, elevate their brand, and drive measurable revenue growth.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-foreground mb-6">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 gap-6 not-prose">
              {[
                { title: 'Extreme Ownership', desc: 'If we build it, we take responsibility for it working flawlessly.' },
                { title: 'No Jargon', desc: 'We speak plain English. We explain technical concepts clearly so you can make informed decisions.' },
                { title: 'Local Context', desc: 'We understand the realities of doing business in South Africa—from load shedding to mobile data constraints.' },
                { title: 'Continuous Growth', desc: 'Technology moves fast. We constantly upskill to ensure we are delivering cutting-edge solutions.' }
              ].map((value, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <h4 className="font-bold text-lg text-foreground m-0">{value.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm m-0 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Process */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Build</h2>
            <p className="text-white/70 text-lg">Our systematic approach to delivering perfect projects.</p>
          </div>

          <div className="space-y-12">
            {[
              { num: '01', title: 'Deep Discovery', desc: 'We kick off with a thorough discovery session. We analyze your competitors, define your target personas, and establish technical requirements. We do not guess; we research.' },
              { num: '02', title: 'Wireframing & UX', desc: 'We map out the user journey. We create low-fidelity wireframes to ensure the structural flow makes sense before applying visual design.' },
              { num: '03', title: 'High-Fidelity UI Design', desc: 'Our designers create pixel-perfect mockups in Figma. We establish a design system (typography, colors, components) that aligns with your brand.' },
              { num: '04', title: 'Full-Stack Development', desc: 'Our engineers write clean, scalable code. We build the frontend for speed and the backend for security and reliability.' },
              { num: '05', title: 'QA & Launch', desc: 'Rigorous testing across mobile and desktop devices. Once approved, we handle the deployment, domain configuration, and go-live.' }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start relative group">
                <div className="text-5xl md:text-7xl font-black text-white/10 group-hover:text-primary/40 transition-colors w-24">
                  {step.num}
                </div>
                <div className="flex-1 pt-2 md:pt-4 border-t border-white/10 group-hover:border-primary/30 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to partner with us?" />
    </Layout>
  );
}
