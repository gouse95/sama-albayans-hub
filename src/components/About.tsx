import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Every project completed to the highest standards with quality materials"
    },
    {
      icon: Clock,
      title: "24/7 Availability", 
      description: "Emergency services available round the clock for urgent repairs"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed professionals with comprehensive insurance coverage"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Skilled technicians with years of experience in UAE market"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Why Choose Sama Albayan?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              With years of experience serving Dubai and Sharjah, we've built our reputation 
              on delivering exceptional technical services that exceed customer expectations.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Comprehensive Services</h3>
                  <p className="text-muted-foreground">From carpentry to AC maintenance, we're your one-stop solution for all technical needs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground">Deep understanding of UAE building standards and climate requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Competitive Pricing</h3>
                  <p className="text-muted-foreground">Fair, transparent pricing with free estimates for all projects.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-soft rounded-xl p-6">
              <h3 className="font-bold text-secondary mb-3">Manager: Mohammed Basheer Ahamed</h3>
              <p className="text-muted-foreground">
                Leading our team with extensive experience in technical services across the UAE. 
                Committed to delivering excellence in every project.
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
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-secondary rounded-2xl p-8 lg:p-12 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-secondary-foreground">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-secondary-foreground/80">Projects Completed</p>
            </div>
            <div className="text-secondary-foreground">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-secondary-foreground/80">Emergency Service</p>
            </div>
            <div className="text-secondary-foreground">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5+</div>
              <p className="text-secondary-foreground/80">Years Experience</p>
            </div>
            <div className="text-secondary-foreground">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-secondary-foreground/80">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;