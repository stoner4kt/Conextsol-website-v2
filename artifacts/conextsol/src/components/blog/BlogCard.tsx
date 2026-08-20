import { Link } from 'wouter';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  index?: number;
}

export function BlogCard({ slug, title, excerpt, date, readTime, category, image, index = 0 }: BlogCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col neo-card bg-card rounded-[2rem] overflow-hidden transition-all duration-300"
    >
      <Link href={`/blog/${slug}`} className="relative aspect-[16/9] overflow-hidden bg-muted block">
        {image ? (
          <img 
            src={image} 
            alt={`${title} article preview for South African businesses`}
            width="800"
            height="450"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <span className="text-primary font-bold">Conextsol Insights</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-teal-950/85 backdrop-blur-sm text-teal-50 border border-primary/20 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </Link>
      
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium mb-4">
          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {readTime}</span>
        </div>
        
        <Link href={`/blog/${slug}`} className="mb-3 block">
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-muted-foreground line-clamp-3 mb-6 flex-1">
          {excerpt}
        </p>
        
        <Link href={`/blog/${slug}`} className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors mt-auto w-fit">
          Read Full Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
