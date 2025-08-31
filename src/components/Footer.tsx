import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">SAMA ALBAYAN</span>
              <br />
              Technical Services
            </h3>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for all technical services in Dubai & Sharjah. 
              Professional quality with 24/7 reliability.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+971 54 235 9965</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">samaalbayan.ts@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Dubai & Sharjah, UAE</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Our Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Carpentry & Woodworks</li>
              <li>Plumbing & Sanitary Works</li>
              <li>Electrical Works</li>
              <li>Painting & Finishing</li>
              <li>AC Installation & Maintenance</li>
              <li>Tile Fixing & Interlock Works</li>
              <li>False Ceiling & Gypsum Works</li>
              <li>Tabook, Plaster & Block Works</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Contact</h4>
            <div className="space-y-4">
              <a 
                href="tel:+971542359965"
                className="block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
              >
                Call Now
              </a>
              <a 
                href="https://wa.me/971542359965"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-secondary-foreground/30 px-4 py-2 rounded-lg text-center font-medium hover:bg-secondary-foreground/10 transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:samaalbayan.ts@gmail.com"
                className="block border border-secondary-foreground/30 px-4 py-2 rounded-lg text-center font-medium hover:bg-secondary-foreground/10 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © 2024 Sama Albayan Technical Services. All rights reserved.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              Manager: Mohammed Basheer Ahamed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;