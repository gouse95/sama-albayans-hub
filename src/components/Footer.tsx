import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">{t('footer.companyName')}</span>
              <br />
              {t('footer.companyType')}
            </h3>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              {t('footer.description')}
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
                <span className="text-sm">{t('footer.serviceAreas')}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('footer.servicesTitle')}</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>{t('footer.services.carpentry')}</li>
              <li>{t('footer.services.plumbing')}</li>
              <li>{t('footer.services.electrical')}</li>
              <li>{t('footer.services.painting')}</li>
              <li>{t('footer.services.ac')}</li>
              <li>{t('footer.services.tiling')}</li>
              <li>{t('footer.services.ceiling')}</li>
              <li>{t('footer.services.masonry')}</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('footer.quickContact')}</h4>
            <div className="space-y-4">
              <a 
                href="tel:+971542359965"
                className="block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
              >
                {t('footer.callNow')}
              </a>
              <a 
                href="mailto:samaalbayan.ts@gmail.com"
                className="block border border-secondary-foreground/30 px-4 py-2 rounded-lg text-center font-medium hover:bg-secondary-foreground/10 transition-colors"
              >
                {t('footer.emailUs')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              {t('footer.rights')}
            </p>
            <p className="text-sm text-secondary-foreground/60">
              {t('footer.manager')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;