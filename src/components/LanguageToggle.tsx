import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle fixed top-4 right-4 z-50 bg-primary text-primary-foreground px-3 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
      aria-label={currentLanguage === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe className="w-4 h-4 mr-2" />
      <span className="font-medium">
        {currentLanguage === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;
