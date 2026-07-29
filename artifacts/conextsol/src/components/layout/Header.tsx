import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '@assets/logo.png';

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 overflow-hidden transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-background/90 backdrop-blur-md border-border shadow-sm' : 'bg-background/55 backdrop-blur-sm'
      )}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src={logoImg}
          alt=""
          className="absolute right-4 top-1/2 h-24 w-auto -translate-y-1/2 opacity-[0.07] blur-[0.2px] sm:right-10 sm:h-28 lg:right-20 lg:h-32"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/45" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50 relative">
            <img
              src={logoImg}
              alt="Conextsol"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={cn("text-sm font-medium hover:text-primary transition-colors", location === '/' && "text-primary")}>
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className={cn("flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-8", location.startsWith('/services') && "text-primary")}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card border border-border shadow-xl rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-2 gap-x-8 gap-y-6">
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="flex flex-col gap-1 group/item">
                    <span className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors">{service.shortTitle}</span>
                    <span className="text-xs text-muted-foreground line-clamp-1">{service.description}</span>
                  </Link>
                ))}
                <div className="col-span-2 pt-4 mt-2 border-t border-border flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Not sure what you need?</span>
                  <Link href="/services" className="text-sm font-bold text-primary hover:underline">
                    View all services →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/portfolio" className={cn("text-sm font-medium hover:text-primary transition-colors", location === '/portfolio' && "text-primary")}>
              Portfolio
            </Link>
            <Link href="/about" className={cn("text-sm font-medium hover:text-primary transition-colors", location === '/about' && "text-primary")}>
              About
            </Link>
            <Link href="/blog" className={cn("text-sm font-medium hover:text-primary transition-colors", location.startsWith('/blog') && "text-primary")}>
              Blog
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="hidden lg:flex" asChild>
              <a href="https://wa.me/27661192498?text=Hi%20Conextsol%2C%20I%27m%20interested%20in%20a%20website%20quote" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -mr-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg md:hidden overflow-hidden max-h-[calc(100dvh-80px)] overflow-y-auto"
          >
            <nav className="flex flex-col p-4 gap-2">
              <Link href="/" className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-muted">Home</Link>
              
              <div className="flex flex-col">
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="px-4 py-3 text-lg font-medium flex items-center justify-between rounded-lg hover:bg-muted"
                >
                  Services
                  <ChevronDown className={cn("w-5 h-5 transition-transform", servicesOpen && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-1 pl-8 pr-4 overflow-hidden"
                    >
                      <Link href="/services" className="py-2 text-primary font-medium">All Services</Link>
                      {services.map(s => (
                        <Link key={s.slug} href={`/services/${s.slug}`} className="py-2 text-muted-foreground">{s.shortTitle}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/portfolio" className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-muted">Portfolio</Link>
              <Link href="/about" className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-muted">About</Link>
              <Link href="/blog" className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-muted">Blog</Link>
              <Link href="/faq" className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-muted">FAQ</Link>
              
              <div className="h-px bg-border my-4 mx-4" />
              
              <div className="flex flex-col gap-3 px-4 pb-8">
                <Button className="w-full justify-center" size="lg" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button variant="outline" className="w-full justify-center" size="lg" asChild>
                  <a href="https://wa.me/27661192498?text=Hi%20Conextsol%2C%20I%27m%20interested%20in%20a%20website%20quote" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
