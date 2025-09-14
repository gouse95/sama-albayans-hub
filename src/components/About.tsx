import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";

const About = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: CheckCircle,
      titleKey: "about.cards.quality.title",
      descriptionKey: "about.cards.quality.description"
    },
    {
      icon: Clock,
      titleKey: "about.cards.availability.title",
      descriptionKey: "about.cards.availability.description"
    },
    {
      icon: Shield,
      titleKey: "about.cards.licensed.title",
      descriptionKey: "about.cards.licensed.description"
    },
    {
      icon: Users,
      titleKey: "about.cards.experienced.title",
      descriptionKey: "about.cards.experienced.description"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('about.subtitle')}
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">{t('about.features.comprehensive.title')}</h3>
                  <p className="text-muted-foreground">{t('about.features.comprehensive.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">{t('about.features.local.title')}</h3>
                  <p className="text-muted-foreground">{t('about.features.local.description')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">{t('about.features.pricing.title')}</h3>
                  <p className="text-muted-foreground">{t('about.features.pricing.description')}</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-soft rounded-xl p-6">
              <h3 className="font-bold text-secondary mb-3">{t('about.manager.title')}</h3>
              <p className="text-muted-foreground">
                {t('about.manager.description')}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-0 shadow-soft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary-soft rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(feature.descriptionKey)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-secondary rounded-2xl p-8 lg:p-12 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-md mx-auto">
            <div className="text-secondary-foreground">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-secondary-foreground/80">{t('about.stats.emergency')}</p>
            </div>
            <div className="text-secondary-foreground">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-secondary-foreground/80">{t('about.stats.satisfaction')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;