import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  currentLanguage: string;
  toggleLanguage: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const updateLanguage = (lng: string) => {
      setCurrentLanguage(lng);
      setIsRTL(lng === 'ar');
      
      // Update HTML attributes
      document.documentElement.lang = lng;
      document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
      
      // Update body class for styling
      document.body.classList.toggle('rtl', lng === 'ar');
    };

    // Set initial language
    updateLanguage(i18n.language);

    // Listen for language changes
    i18n.on('languageChanged', updateLanguage);

    return () => {
      i18n.off('languageChanged', updateLanguage);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  const value = {
    currentLanguage,
    toggleLanguage,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
