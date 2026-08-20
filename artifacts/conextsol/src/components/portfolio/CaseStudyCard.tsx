import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudyCardProps {
  id: string;
  clientType: string;
  industry: string;
  services: string[];
  keyMetric: string;
  description: string;
  imageUrl: string;
  index?: number;
}

export function CaseStudyCard({ id, clientType, industry, services, keyMetric, description, imageUrl, index = 0 }: CaseStudyCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col neo-card bg-card rounded-[2rem] overflow-hidden transition-all duration-300"
    >
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={`${clientType} ${industry} website and software project by Conextsol`}
          width="900"
          height="600"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground border-2 border-stone-900/80 text-xs font-black px-3 py-1.5 rounded-full">
            {industry}
          </span>
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="mb-4">
          <div className="text-secondary font-bold text-sm mb-2">{services.join(' • ')}</div>
          <h3 className="text-2xl font-bold text-foreground mb-3">{clientType}</h3>
          <p className="text-muted-foreground line-clamp-3 mb-6">
            {description}
          </p>
        </div>
        
        <div className="mt-auto">
          <div className="bg-yellow-100 border-2 border-stone-900/80 rounded-2xl p-4 mb-6">
            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Key Result</div>
            <div className="font-bold text-foreground text-lg">{keyMetric}</div>
          </div>
          
          <Link href={`/portfolio/${id}`} className="inline-flex items-center font-bold text-foreground hover:text-primary transition-colors">
            View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
