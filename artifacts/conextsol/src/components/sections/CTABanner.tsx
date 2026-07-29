import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({ 
  title = "Ready to Build Something Great?", 
  subtitle = "Let's discuss how we can help your South African business grow with a high-performance website or custom software." 
}: CTABannerProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-950 relative overflow-hidden">
      {/* Abstract Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-primary/20 blur-[120px] rounded-full rotate-12" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[150%] bg-secondary/20 blur-[120px] rounded-full -rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight max-w-3xl mx-auto">
          {title}
        </h2>
        <p className="text-xl text-muted/80 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-teal-300/10 border-teal-200/30 text-white hover:bg-teal-300 hover:text-slate-950" asChild>
            <a href="https://wa.me/27661192498?text=Hi%20Conextsol%2C%20I%27m%20interested%20in%20a%20website%20quote" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-5 w-5 text-[#25D366]" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
