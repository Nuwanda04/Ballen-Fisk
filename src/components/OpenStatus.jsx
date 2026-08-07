import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { getDetailedStatus } from '../utils/openingHours';

export const OpenStatus = () => {
  const { language, t } = useLanguage();
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
      : t('status.seasonShort');    // Off-season — show when the season is

  return (
    <div className="flex items-center gap-3" role="status" aria-live="polite" aria-label={`${status.isOpen ? t('status.open') : t('status.closed')}${hint ? `, ${hint}` : ''}`}>
      <div className="inline-flex h-12 items-center gap-2 rounded-full bg-white/10 px-3 backdrop-blur-md border border-white/10 md:h-auto md:px-4 md:py-2">
        <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${status.isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
        <span className="text-xs md:text-sm font-medium text-white whitespace-nowrap">
          {status.isOpen
            ? t('status.open')
            : t('status.closed')}
        </span>
        {hint && (
          <span className="text-xs text-white/50 hidden md:inline whitespace-nowrap">
            · {hint}
          </span>
        )}
      </div>
    </div>
  );
};
