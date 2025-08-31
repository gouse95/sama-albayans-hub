import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  const services = [
    {
      icon: Hammer,
      title: "Carpentry & Woodworks",
      description: "Custom furniture, cabinets, doors, and all woodworking solutions",
      features: ["Custom Furniture", "Cabinet Installation", "Door Repair", "Wood Finishing"]
    },
    {
      icon: Home,
      title: "Tabook, Plaster & Block Works", 
      description: "Professional masonry, plastering, and structural block work",
      features: ["Wall Construction", "Plastering", "Block Installation", "Surface Preparation"]
    },
    {
      icon: Settings,
      title: "Tile Fixing & Interlock Works",
      description: "Precision tile installation and interlock pavement solutions",
      features: ["Ceramic Tiles", "Marble Installation", "Interlock Pavement", "Waterproofing"]
    },
    {
      icon: Droplets,
      title: "Plumbing & Sanitary Works",
      description: "Complete plumbing solutions from repairs to full installations",
      features: ["Pipe Installation", "Leak Repairs", "Bathroom Fitting", "Water Systems"]
    },
    {
      icon: Zap,
      title: "Electrical Works",
      description: "Safe and reliable electrical installations and maintenance",
      features: ["Wiring Installation", "Switch Repair", "Circuit Breakers", "Safety Inspections"]
    },
    {
      icon: PaintBucket,
      title: "Painting & Finishing",
      description: "Professional interior and exterior painting services",
      features: ["Interior Painting", "Exterior Coating", "Wall Preparation", "Color Consultation"]
    },
    {
      icon: Wrench,
      title: "False Ceiling & Gypsum Works",
      description: "Modern ceiling solutions and decorative gypsum installations",
      features: ["False Ceiling", "Gypsum Decoration", "Lighting Integration", "Acoustic Solutions"]
    },
    {
      icon: Wind,
      title: "AC Installation & Maintenance",
      description: "Complete air conditioning services for optimal comfort",
      features: ["AC Installation", "Regular Maintenance", "Duct Cleaning", "System Repair"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical solutions delivered by experienced professionals 
            with a commitment to quality and reliability.
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
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find exactly what you're looking for? We provide customized technical 
              solutions tailored to your specific requirements.
            </p>
            <a 
              href="tel:+971542359965" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-brand"
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;