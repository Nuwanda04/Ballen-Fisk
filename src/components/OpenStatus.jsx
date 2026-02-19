import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getDetailedStatus } from '../utils/openingHours';

const seasonLabel = {
  da: 'Sæson: April – Okt',
  en: 'Season: April – Oct',
  de: 'Saison: April – Okt'
};

export const OpenStatus = () => {
  const { language } = useLanguage();
  const [status, setStatus] = useState(() => getDetailedStatus(language));

  useEffect(() => {
    const check = () => setStatus(getDetailedStatus(language));
    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, [language]);

  // Determine what hint to show
  const hint = status.isOpen
    ? status.hint
    : status.todayHours
      ? status.hint               // In-season but closed right now
      : seasonLabel[language];    // Off-season — show when the season is

  return (
    <div className="flex items-center gap-3">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
        <div className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
        <span className="text-sm font-medium text-white">
          {status.isOpen
            ? (language === 'de' ? 'Geöffnet' : language === 'en' ? 'Open' : 'Åben')
            : (language === 'de' ? 'Geschlossen' : language === 'en' ? 'Closed' : 'Lukket')}
        </span>
        {hint && (
          <span className="text-xs text-white/50 hidden sm:inline">
            · {hint}
          </span>
        )}
      </div>
    </div>
  );
};

