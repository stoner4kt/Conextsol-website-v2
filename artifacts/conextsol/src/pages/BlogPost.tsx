import { useParams, Link } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { CTABanner } from '@/components/sections/CTABanner';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { blogPosts } from '@/data/blog';
import { Calendar, Clock, ArrowLeft, RefreshCw } from 'lucide-react';
import NotFound from './not-found';
import { motion } from 'framer-motion';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.publishedIsoDate || "2026-03-01",
    "dateModified": post.lastUpdated || "2026-03-15",
    "author": {
      "@type": "Organization",
      "name": "Conextsol",
      "url": "https://conextsol.co.za"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Conextsol",
      "logo": {
        "@type": "ImageObject",
        "url": "https://conextsol.co.za/logo.png"
      }
    },
    "image": post.image || "https://conextsol.co.za/og-image.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://conextsol.co.za/blog/${post.slug}`
    }
  };

  return (
    <Layout>
      <SEOHead 
        title={post.metaTitle}
        description={post.metaDescription}
        type="article"
        canonicalUrl={`/blog/${post.slug}`}
        schema={articleSchema}
      />
      
      <article className="pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <Link href="/blog" className="inline-flex items-center text-primary font-bold hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>

          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-medium mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Published: {post.date}</span>
              {post.lastUpdated && (
                <span className="flex items-center gap-1.5 text-primary/90 font-semibold bg-primary/5 px-2.5 py-1 rounded-md border border-primary/20">
                  <RefreshCw className="w-3.5 h-3.5" /> Updated: {post.lastUpdated}
                </span>
              )}
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 leading-tight">
              {post.title}
            </h1>
          </div>

          {post.image && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl"
            >
              <img src={post.image} alt={`${post.title} article image for South African business owners`} width="1200" height="675" className="w-full h-full object-cover" />
            </motion.div>
          )}

          <div 
            className="prose prose-lg prose-slate dark:prose-invert max-w-none 
              prose-headings:text-foreground prose-a:text-primary prose-a:font-bold hover:prose-a:text-secondary prose-strong:text-foreground prose-li:text-muted-foreground prose-p:text-muted-foreground prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </div>
      </article>

      <RelatedServices slugs={(post as any).relatedServiceSlugs} />

      <CTABanner title="Need a digital partner?" subtitle="Let's discuss how we can help implement these strategies for your business." />
    </Layout>
  );
}
