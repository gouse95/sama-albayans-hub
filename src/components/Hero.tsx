import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-tools.jpg";

const Hero = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+971542359965";
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