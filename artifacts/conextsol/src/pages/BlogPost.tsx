import { useParams, Link } from 'wouter';
import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { CTABanner } from '@/components/sections/CTABanner';
import { blogPosts } from '@/data/blog';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import NotFound from './not-found';
import { motion } from 'framer-motion';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <Layout>
      <SEOHead 
        title={post.metaTitle}
        description={post.metaDescription}
        type="article"
      />
      
      <article className="pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <Link href="/blog" className="inline-flex items-center text-primary font-bold hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>

          <div className="mb-10">
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
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
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </motion.div>
          )}

          <div 
            className="prose prose-lg prose-slate dark:prose-invert max-w-none 
              prose-headings:text-foreground prose-a:text-primary prose-a:font-bold hover:prose-a:text-secondary prose-strong:text-foreground prose-li:text-muted-foreground prose-p:text-muted-foreground prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </div>
      </article>

      <CTABanner title="Need a digital partner?" subtitle="Let's discuss how we can help implement these strategies for your business." />
    </Layout>
  );
}
