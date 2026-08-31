import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/logo.png";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/92 backdrop-blur-xl border-stone-900/80 shadow-[0_6px_0_rgba(28,25,23,0.08)]"
          : "bg-background/75 backdrop-blur-md",
      )}
    >
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={logoImg}
          alt=""
          width="320"
          height="80"
          className="absolute right-4 top-1/2 h-24 w-auto -translate-y-1/2 opacity-[0.07] blur-[0.2px] sm:right-10 sm:h-28 lg:right-20 lg:h-32"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/45" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group z-50 relative"
          >
            <img
              src={logoImg}
              alt="Conextsol web design and software development studio logo"
              width="160"
              height="40"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 rounded-full border-2 border-stone-900/80 bg-card/80 p-2 shadow-[5px_5px_0_rgba(28,25,23,0.14)]">
            <Link
              href="/"
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold hover:bg-accent hover:text-accent-foreground transition-colors",
                location === "/" && "text-primary",
              )}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold hover:bg-accent hover:text-accent-foreground transition-colors",
                  (location.startsWith("/services") || servicesOpen) &&
                    "text-primary",
                )}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services{" "}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    servicesOpen ? "rotate-180" : "group-hover:rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 w-[600px] z-50 neo-card rounded-[2rem] p-6 transition-all duration-200 grid grid-cols-2 gap-x-8 gap-y-6 before:absolute before:-top-4 before:left-0 before:right-0 before:h-4 before:bg-transparent",
                  servicesOpen
                    ? "opacity-100 visible pointer-events-auto"
                    : "opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto",
                )}
              >
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="flex flex-col gap-1 group/item p-1.5 -m-1.5 rounded-lg hover:bg-muted/40 transition-colors"
                  >
                    <span className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors">
                      {service.shortTitle}
                    </span>
                    <span className="text-xs text-muted-foreground line-clamp-1">
                      {service.description}
                    </span>
                  </Link>
                ))}
                <div className="col-span-2 pt-4 mt-2 border-t border-border flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Not sure what you need?
                  </span>
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="text-sm font-bold text-primary hover:underline"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold hover:bg-accent hover:text-accent-foreground transition-colors",
                location === "/about" && "text-primary",
              )}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold hover:bg-accent hover:text-accent-foreground transition-colors",
                location.startsWith("/blog") && "text-primary",
              )}
            >
              Blog
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="hidden lg:flex" asChild>
              <a
                href="https://wa.me/27661192498?text=Hi%20Conextsol%2C%20I%27m%20interested%20in%20a%20website%20quote"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2.5 -mr-2 z-50 relative rounded-2xl border-2 border-stone-900/80 bg-card text-foreground hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-2xl border-b-2 border-stone-900/80 shadow-2xl md:hidden overflow-hidden max-h-[calc(100dvh-80px)] overflow-y-auto z-50"
          >
            <nav className="flex flex-col p-4 gap-1.5 container mx-auto">
              <Link
                href="/"
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-xl hover:bg-muted/80 transition-colors flex items-center justify-between",
                  location === "/"
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground",
                )}
              >
                Home
              </Link>

              <div className="flex flex-col">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={cn(
                    "px-4 py-3 text-base font-medium flex items-center justify-between rounded-xl hover:bg-muted/80 transition-colors w-full text-left",
                    location.startsWith("/services")
                      ? "text-primary font-semibold"
                      : "text-foreground",
                  )}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      servicesOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-1 pl-6 pr-2 py-1 overflow-hidden"
                    >
                      <Link
                        href="/services"
                        className={cn(
                          "px-3 py-2 text-sm rounded-lg font-medium hover:bg-muted/60 transition-colors",
                          location === "/services"
                            ? "text-primary font-semibold"
                            : "text-primary",
                        )}
                      >
                        All Services →
                      </Link>
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className={cn(
                            "px-3 py-2 text-sm rounded-lg transition-colors hover:bg-muted/60",
                            location === `/services/${s.slug}`
                              ? "text-primary font-medium bg-primary/5"
                              : "text-muted-foreground hover:text-foreground",
                          )}
                        >
                          {s.shortTitle}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-xl hover:bg-muted/80 transition-colors",
                  location === "/about"
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground",
                )}
              >
                About
              </Link>
              <Link
                href="/blog"
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-xl hover:bg-muted/80 transition-colors",
                  location.startsWith("/blog")
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground",
                )}
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-xl hover:bg-muted/80 transition-colors",
                  location === "/faq"
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground",
                )}
              >
                FAQ
              </Link>

              <div className="h-px bg-border/60 my-3 mx-2" />

              <div className="flex flex-col gap-3 px-2 pt-1 pb-6">
                <Button
                  className="w-full justify-center text-base py-6 shadow-md"
                  size="lg"
                  asChild
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-center text-base py-6 border-border/80"
                  size="lg"
                  asChild
                >
                  <a
                    href="https://wa.me/27661192498?text=Hi%20Conextsol%2C%20I%27m%20interested%20in%20a%20website%20quote"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
