import { Link } from 'wouter';
import { Layout as LayoutIcon, Code2, TerminalSquare, Figma, ShoppingCart, Wrench, TrendingUp, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { SEOHead } from '@/components/seo/SEOHead';
import { Layout } from '@/components/layout/Layout';
import { CTABanner } from '@/components/sections/CTABanner';
import { CaseStudyCard } from '@/components/portfolio/CaseStudyCard';
import { BlogCard } from '@/components/blog/BlogCard';

import { services } from '@/data/services';
import { portfolio } from '@/data/portfolio';
import { blogPosts } from '@/data/blog';

import heroImg from '@assets/hero.jpg';

// Map icon strings to components
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

export default function Home() {
  return (
    <Layout>
      <SEOHead
        title="Cape Town's Results-Driven Web Design & Development Studio"
        description="Conextsol builds fast, beautiful, high-converting websites, custom software, and Google Ads campaigns. Based in Cape Town, serving clients across South Africa."
        canonicalUrl="/"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Conextsol Hero"
            className="w-full h-full object-cover opacity-15 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Taking on new projects for 2026
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-tight"
            >
              South Africa's <span className="gradient-text">Results-Driven</span> Web Design Studio
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We build fast, beautiful, high-converting websites and software that grow South African businesses. Based in Cape Town, serving businesses nationwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 duration-300">
                Get Your Free Quote
              </Link>
              <a
                href="https://wa.me/27661192498?text=Hi%20Conextsol%2C%20I%27m%20interested%20in%20a%20website%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-card text-foreground border border-border font-bold rounded-lg text-lg hover:bg-muted transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                WhatsApp Us
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground"
            >
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 20+ Projects Delivered</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 5-Star Rated</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> South African Owned</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> POPIA & WCAG Compliant</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-card via-teal-950/40 to-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Idea to Online in 3 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground">
              We handle the tech — you focus on your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              {
                step: '01',
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                ),
                title: 'Tell Us About Your Business',
                desc: 'Book a free consultation and share your goals. We listen, ask the right questions, and map out exactly what you need — no jargon, no pressure.'
              },
              {
                step: '02',
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: 'We Design & Build',
                desc: 'Our team crafts a fast, mobile-friendly website tailored to your brand and your customers — no cookie-cutter templates, no shortcuts.'
              },
              {
                step: '03',
                icon: (
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Launch & Grow',
                desc: 'Go live with confidence. We handle the technical side, monitor performance, and stay available for support as your business grows.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative bg-background rounded-2xl border border-border p-8 group hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="text-5xl font-black text-primary/10 mb-4 group-hover:text-primary/20 transition-colors select-none">
                  {item.step}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 duration-300"
            >
              Book a Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-br from-muted/70 via-background to-teal-950/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground">End-to-end digital solutions designed to help your South African business scale, automate, and dominate your market.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || LayoutIcon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.shortTitle}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Conextsol */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why South African Businesses Choose Us</h2>
            <p className="text-lg text-muted-foreground">We don't just build websites. We build business assets that generate ROI.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Results-Focused', desc: 'We measure success in leads, sales, and conversions—not just good-looking pixels.' },
              { title: 'Fast & Performant', desc: 'Every site we build targets sub-2-second load times optimised for SA mobile connections.' },
              { title: 'Full-Stack Expertise', desc: 'From pixel-perfect design to robust backend development—all under one roof.' },
              { title: 'Transparent Process', desc: 'No hidden fees, no confusing jargon. Clear milestones from discovery to launch.' },
              { title: 'Local Understanding', desc: 'We understand SA market dynamics, local payment gateways (PayFast), and POPIA.' },
              { title: 'Ongoing Partnership', desc: 'We do not disappear after launch. Maintenance, updates, and growth are part of our service.' }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Proven Process</h2>
            <p className="text-lg text-emerald-50/85">A streamlined approach that takes your project from concept to high-converting reality.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Strategy', desc: 'We learn your business, goals, and audience in depth before writing a single line of code.' },
              { step: '02', title: 'Design & Prototype', desc: 'We design your site with conversion and aesthetics in perfect balance, presented in Figma.' },
              { step: '03', title: 'Development & Testing', desc: 'Clean, fast, accessible code—rigorously tested across devices and modern browsers.' },
              { step: '04', title: 'Launch & Optimise', desc: 'We handle the technical launch, monitor performance, and continuously improve.' }
            ].map((p, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-black text-white/5 mb-4 group-hover:text-primary/20 transition-colors">{p.step}</div>
                <h4 className="text-xl font-bold text-white mb-3">{p.title}</h4>
                <p className="text-emerald-50/80 leading-relaxed">{p.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 -right-4 w-8 border-t-2 border-dashed border-emerald-200/30" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recent Work</h2>
              <p className="text-lg text-muted-foreground">Explore how we've helped South African businesses scale with custom digital solutions.</p>
            </div>
            <Link href="/portfolio" className="inline-flex items-center font-bold text-primary hover:underline whitespace-nowrap">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.slice(0, 3).map((study, idx) => (
              <CaseStudyCard key={study.id} {...study} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
              <p className="text-lg text-muted-foreground">Actionable advice on web design, development, and growing your business online.</p>
            </div>
            <Link href="/blog" className="inline-flex items-center font-bold text-primary hover:underline whitespace-nowrap">
              Read All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, idx) => (
              <BlogCard key={post.slug} {...post} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
}
