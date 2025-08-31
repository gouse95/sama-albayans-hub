import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `New Service Request from Website:
    
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Needed: ${formData.service}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/971542359965?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Request Sent!",
      description: "We'll contact you shortly to discuss your project.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 54 235 9965", "+971 54 797 9961"],
      action: () => window.location.href = "tel:+971542359965"
    },
    {
      icon: Mail,
      title: "Email Us", 
      details: ["samaalbayan.ts@gmail.com"],
      action: () => window.location.href = "mailto:samaalbayan.ts@gmail.com"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: ["Dubai, UAE", "Sharjah, UAE"],
      action: null
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["24/7 Emergency Service", "Mon-Sat: 8AM-8PM"],
      action: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-section" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation 
            and detailed quote tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`group transition-all duration-300 hover:shadow-medium border-0 shadow-soft ${info.action ? 'cursor-pointer hover:-translate-y-1' : ''}`}
                onClick={info.action || undefined}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <div className="bg-secondary rounded-xl p-6 text-center">
              <h3 className="font-bold text-secondary-foreground mb-4">Need Immediate Help?</h3>
              <div className="space-y-3">
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => window.location.href = "tel:+971542359965"}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Call
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
                  onClick={() => window.open("https://wa.me/971542359965", "_blank")}
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382"/>
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-medium">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-secondary text-center">
                  Request Your Free Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-secondary font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-secondary font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+971 XX XXX XXXX"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-secondary font-medium">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-secondary font-medium">Service Needed *</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-2 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="Carpentry & Woodworks">Carpentry & Woodworks</option>
                      <option value="Tabook, Plaster & Block Works">Tabook, Plaster & Block Works</option>
                      <option value="Tile Fixing & Interlock Works">Tile Fixing & Interlock Works</option>
                      <option value="Plumbing & Sanitary Works">Plumbing & Sanitary Works</option>
                      <option value="Electrical Works">Electrical Works</option>
                      <option value="Painting & Finishing">Painting & Finishing</option>
                      <option value="False Ceiling & Gypsum Works">False Ceiling & Gypsum Works</option>
                      <option value="AC Installation & Maintenance">AC Installation & Maintenance</option>
                      <option value="Multiple Services">Multiple Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-secondary font-medium">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please describe your project, timeline, and any specific requirements..."
                      rows={4}
                      className="mt-2"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg"
                    className="w-full text-lg py-6"
                  >
                    Send Quote Request
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * We'll respond within 2 hours during business hours. 
                    For emergencies, please call directly.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;