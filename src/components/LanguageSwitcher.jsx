import { useLanguage } from '../i18n/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  // Using country-flags CDN for reliable flag rendering
  const flags = {
    da: 'https://flagcdn.com/w40/dk.png',
    en: 'https://flagcdn.com/w40/gb.png',
    de: 'https://flagcdn.com/w40/de.png'
  };

  const languages = [
    { code: 'da', label: 'Dansk' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' }
  ];

  return (
    <div className="flex gap-2">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => changeLanguage(code)}
          className={`px-2 py-1.5 rounded-lg transition-all duration-300 ${
            language === code
              ? 'bg-[#3E92CC] shadow-lg scale-110 ring-2 ring-white/30'
              : 'bg-white/10 hover:bg-white/20'
          }`}
          title={label}
        >
          <img
            src={flags[code]}
            alt={label}
            className="w-7 h-5 object-cover rounded-sm"
          />
        </button>
      ))}
    </div>
  );
};
