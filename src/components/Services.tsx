import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { 
  Wrench, 
  Zap, 
  Droplets, 
  PaintBucket, 
  Wind, 
  Hammer, 
  Home, 
  Settings 
} from "lucide-react";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Hammer,
      titleKey: "services.carpentry.title",
      descriptionKey: "services.carpentry.description",
      featuresKey: "services.carpentry.features"
    },
    {
      icon: Home,
      titleKey: "services.masonry.title",
      descriptionKey: "services.masonry.description",
      featuresKey: "services.masonry.features"
    },
    {
      icon: Settings,
      titleKey: "services.tiling.title",
      descriptionKey: "services.tiling.description",
      featuresKey: "services.tiling.features"
    },
    {
      icon: Droplets,
      titleKey: "services.plumbing.title",
      descriptionKey: "services.plumbing.description",
      featuresKey: "services.plumbing.features"
    },
    {
      icon: Zap,
      titleKey: "services.electrical.title",
      descriptionKey: "services.electrical.description",
      featuresKey: "services.electrical.features"
    },
    {
      icon: PaintBucket,
      titleKey: "services.painting.title",
      descriptionKey: "services.painting.description",
      featuresKey: "services.painting.features"
    },
    {
      icon: Wrench,
      titleKey: "services.ceiling.title",
      descriptionKey: "services.ceiling.description",
      featuresKey: "services.ceiling.features"
    },
    {
      icon: Wind,
      titleKey: "services.ac.title",
      descriptionKey: "services.ac.description",
      featuresKey: "services.ac.features"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-0 shadow-medium animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary-soft rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                  {t(service.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-4 text-center">
                  {t(service.descriptionKey)}
                </CardDescription>
                <ul className="space-y-2">
                  {(t(service.featuresKey, { returnObjects: true }) as string[]).map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center text-sm text-secondary/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-medium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              {t('services.customSolution.title')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('services.customSolution.description')}
            </p>
            <a 
              href="tel:+971542359965" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-brand"
            >
              {t('services.customSolution.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;