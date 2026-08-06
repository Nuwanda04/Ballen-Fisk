import { useEffect, useState } from 'react';
import { translations } from './translations';
import { LanguageContext } from './context';

const supportedLanguages = ['da', 'en', 'de'];

const getLanguageFromPath = () => {
  const pathLanguage = window.location.pathname.split('/').filter(Boolean)[0];
  return supportedLanguages.includes(pathLanguage) ? pathLanguage : null;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => getLanguageFromPath() || 'da');

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (!getLanguageFromPath() && saved && supportedLanguages.includes(saved)) {
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

    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute('href', `${window.location.origin}${language === 'da' ? '/' : `/${language}/`}`);

    const locale = { da: 'da_DK', en: 'en_GB', de: 'de_DE' }[language];
    const openGraphLocale = document.querySelector('meta[property="og:locale"]');
    openGraphLocale?.setAttribute('content', locale);
  }, [language]);

  const changeLanguage = (lang) => {
    if (!supportedLanguages.includes(lang)) return;
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
