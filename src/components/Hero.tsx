import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-tools.jpg";

const Hero = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+971542359965";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/971542359965", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional technical services tools and equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            {/* Company Logo/Name */}
            <div className="mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-secondary-foreground mb-4">
                SAMA ALBAYAN
              </h1>
              <p className="text-2xl lg:text-3xl text-primary font-semibold">
                Technical Services
              </p>
            </div>

            {/* Tagline */}
            <div className="mb-12">
              <h2 className="text-xl lg:text-2xl text-secondary-foreground/90 font-medium leading-relaxed">
                Your Trusted Partner for All Technical Services in Dubai & Sharjah
              </h2>
              <p className="text-lg text-secondary-foreground/80 mt-4 max-w-2xl">
                From carpentry to electrical work, plumbing to AC maintenance - 
                we deliver professional quality with 24/7 reliability.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleCallNow}
                className="text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +971 54 235 9965
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleWhatsApp}
                className="text-lg px-8 py-6 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
                </svg>
                WhatsApp
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-secondary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-sm">+971 54 235 9965</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm">samaalbayan.ts@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Service Areas</p>
                  <p className="text-sm">Dubai & Sharjah, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="text-center text-secondary-foreground/60">
          <p className="text-sm mb-2">Scroll for Services</p>
          <div className="w-6 h-6 mx-auto border-2 border-secondary-foreground/40 rounded-full flex items-center justify-center">
            <div className="w-1 h-3 bg-secondary-foreground/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;