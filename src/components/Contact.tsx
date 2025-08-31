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
    
    // Show success message only
    console.log('Form submitted:', formData);
    
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