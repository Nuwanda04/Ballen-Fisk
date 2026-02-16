import { useLanguage } from '../i18n/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const flags = {
    da: '🇩🇰',
    en: '🇬🇧',
    de: '🇩🇪'
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
          className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
            language === code
              ? 'bg-[#3E92CC] text-white shadow-lg scale-110'
              : 'bg-white/10 text-white/70 hover:bg-white/20'
          }`}
          title={label}
        >
          <span className="text-xl">{flags[code]}</span>
          <span className="text-sm font-medium hidden sm:inline">{code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};
