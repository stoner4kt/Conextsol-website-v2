import { Link } from 'wouter';
import { Facebook, Instagram } from 'lucide-react';
import logoImg from '@assets/logo.png';
import { trackEmailClick, trackPhoneClick } from '@/lib/analytics';

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <img
                src={logoImg}
                alt="Conextsol web design and software development studio logo"
                width="144"
                height="36"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-emerald-50/85 text-sm leading-relaxed max-w-xs">
              South Africa's results-driven web design and custom software development studio. We build digital assets that grow your business.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/1CuQspKwuJ/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white" 
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/conextsol?igsh=M2c0cnJlbWVmN3B1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white" 
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services/website-design" className="text-emerald-50/85 hover:text-white transition-colors text-sm">Website Design</Link></li>
              <li><Link href="/services/web-development" className="text-emerald-50/85 hover:text-white transition-colors text-sm">Web Development</Link></li>
              <li><Link href="/services/custom-software-development" className="text-emerald-50/85 hover:text-white transition-colors text-sm">Custom Software</Link></li>
              <li><Link href="/services/ui-ux-design" className="text-emerald-50/85 hover:text-white transition-colors text-sm">UI/UX Design</Link></li>
              <li><Link href="/services/ecommerce-development" className="text-emerald-50/85 hover:text-white transition-colors text-sm">E-commerce</Link></li>
              <li><Link href="/services/website-maintenance" className="text-emerald-50/85 hover:text-white transition-colors text-sm">Maintenance & SEO</Link></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-emerald-50/85 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/portfolio" className="text-emerald-50/85 hover:text-white transition-colors text-sm">Our Work</Link></li>
              <li><Link href="/blog" className="text-emerald-50/85 hover:text-white transition-colors text-sm">Blog & Insights</Link></li>
              <li><Link href="/faq" className="text-emerald-50/85 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/contact" className="text-emerald-50/85 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-emerald-50/85">
              <li>
                <strong>Email:</strong><br />
                <a href="mailto:info@conextsol.co.za" onClick={() => trackEmailClick('footer')} className="hover:text-white transition-colors">info@conextsol.co.za</a>
              </li>
              <li>
                <strong>Phone:</strong><br />
                <a href="tel:+27661192498" onClick={() => trackPhoneClick('footer')} className="hover:text-white transition-colors">066 119 2498</a>
              </li>
              <li>
                <strong>Office:</strong><br />
                Cape Town, South Africa<br />
                (Remote-first nationwide)
              </li>
            </ul>
            <a
              href="https://wa.me/27661192498?text=Hi%20Conextsol%2C%20I%27m%20interested%20in%20a%20website%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg mt-6 font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <WhatsAppIcon size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-50/70">
          <p>© {new Date().getFullYear()} Conextsol. All rights reserved. Fully POPIA Compliant.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
