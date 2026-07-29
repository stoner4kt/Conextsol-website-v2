import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BlogCard } from '@/components/blog/BlogCard';
import { CTABanner } from '@/components/sections/CTABanner';
import { blogPosts } from '@/data/blog';
import { motion } from 'framer-motion';

export default function BlogListing() {
  return (
    <Layout>
      <SEOHead 
        title="Blog & Insights | Conextsol"
        description="Read our latest insights on web design, development, SEO, and digital strategy for South African businesses."
      />
      
      <section className="pt-24 pb-16 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Insights & Resources
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Actionable advice, guides, and thoughts on growing your South African business online.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <BlogCard key={post.slug} {...post} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Subscribe to our newsletter?" subtitle="We don't actually have one yet, but contact us for a quote!" />
    </Layout>
  );
}
