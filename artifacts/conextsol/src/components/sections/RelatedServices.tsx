import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

import { services } from '@/data/services';

interface RelatedServicesProps {
  slugs?: string[];
  title?: string;
}

export function RelatedServices({ slugs = ['website-design', 'web-development', 'custom-software-development'], title = 'Related Services' }: RelatedServicesProps) {
  const related = slugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean)
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((service) => service && (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-card rounded-2xl border border-border p-6 hover:shadow-xl transition-all">
              <div className="text-sm font-bold text-primary mb-3">{service.shortTitle}</div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-5 line-clamp-3">{service.description}</p>
              <span className="inline-flex items-center font-bold text-primary">Learn More <ArrowRight className="ml-2 h-4 w-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
