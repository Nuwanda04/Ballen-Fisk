import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const currentLanguage = languages.find(l => l.code === language) || languages[0];

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="relative md:hidden" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors relative z-50"
        >
          <img
            src={flags[language]}
            alt={currentLanguage.label}
            className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
          />
          <ChevronDown className={`w-3 h-3 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 bg-[#0B132B] border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[140px] z-[60]">
            {languages.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => {
                  changeLanguage(code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  language === code
                    ? 'bg-white/10'
                    : 'hover:bg-white/5'
                }`}
              >
                <img
                  src={flags[code]}
                  alt={label}
                  className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                />
                <span className={`text-sm ${language === code ? 'text-white font-bold' : 'text-white/80'}`}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop List */}
      <div className="hidden md:flex gap-2">
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
    </>
  );
};
