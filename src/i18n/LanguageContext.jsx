import { useEffect, useState } from 'react';
import { translations } from './translations';
import { LanguageContext } from './context';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('da');

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved && ['da', 'en', 'de'].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    const seo = translations[language].seo;
    document.title = seo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute('content', seo.description);

    const openGraphDescription = document.querySelector('meta[property="og:description"]');
    openGraphDescription?.setAttribute('content', seo.description);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    twitterDescription?.setAttribute('content', seo.description);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
