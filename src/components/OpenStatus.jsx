import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getHoursString, getOpeningStatus } from '../utils/openingHours';

export const OpenStatus = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      setIsOpen(getOpeningStatus());
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center md:items-start gap-2">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md">
        <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
        <span className="text-sm font-medium text-white">
          {isOpen ? t('status.open') : t('status.closed')}
        </span>
      </div>
      <div className="text-xs text-white/60 px-4">
        {getHoursString(language)}
      </div>
    </div>
  );
};
