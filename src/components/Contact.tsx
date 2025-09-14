import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
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
      title: t('contact.toast.title'),
      description: t('contact.toast.description'),
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
      titleKey: "contact.info.call",
      details: ["+971 54 235 9965", "+971 54 797 9961"],
      action: () => window.location.href = "tel:+971542359965"
    },
    {
      icon: Mail,
      titleKey: "contact.info.email", 
      details: ["samaalbayan.ts@gmail.com"],
      action: () => window.location.href = "mailto:samaalbayan.ts@gmail.com"
    },
    {
      icon: MapPin,
      titleKey: "contact.info.areas",
      details: ["Dubai, UAE", "Sharjah, UAE"],
      action: null
    },
    {
      icon: Clock,
      titleKey: "contact.info.hours",
      detailsKeys: ["contact.info.emergency", "contact.info.businessHours"],
      action: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-section" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
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
                        {t(info.titleKey)}
                      </h3>
                      {info.detailsKeys ? info.detailsKeys.map((detailKey, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm">
                          {t(detailKey)}
                        </p>
                      )) : info.details.map((detail, detailIndex) => (
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
              <h3 className="font-bold text-secondary-foreground mb-4">{t('contact.quickActions.title')}</h3>
              <div className="space-y-3">
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => window.location.href = "tel:+971542359965"}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t('contact.quickActions.emergencyCall')}
                </Button>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-medium">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-secondary text-center">
                  {t('contact.form.title')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-secondary font-medium">{t('contact.form.name')}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder={t('contact.form.namePlaceholder')}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-secondary font-medium">{t('contact.form.phone')}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder={t('contact.form.phonePlaceholder')}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-secondary font-medium">{t('contact.form.email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-secondary font-medium">{t('contact.form.service')}</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full mt-2 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    >
                      <option value="">{t('contact.form.servicePlaceholder')}</option>
                      <option value="Carpentry & Woodworks">{t('contact.services.carpentry')}</option>
                      <option value="Tabook, Plaster & Block Works">{t('contact.services.masonry')}</option>
                      <option value="Tile Fixing & Interlock Works">{t('contact.services.tiling')}</option>
                      <option value="Plumbing & Sanitary Works">{t('contact.services.plumbing')}</option>
                      <option value="Electrical Works">{t('contact.services.electrical')}</option>
                      <option value="Painting & Finishing">{t('contact.services.painting')}</option>
                      <option value="False Ceiling & Gypsum Works">{t('contact.services.ceiling')}</option>
                      <option value="AC Installation & Maintenance">{t('contact.services.ac')}</option>
                      <option value="Multiple Services">{t('contact.services.multiple')}</option>
                      <option value="Other">{t('contact.services.other')}</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-secondary font-medium">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder={t('contact.form.messagePlaceholder')}
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
                    {t('contact.form.submit')}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    {t('contact.form.disclaimer')}
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