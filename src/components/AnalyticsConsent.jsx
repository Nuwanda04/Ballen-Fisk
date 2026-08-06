import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

const loadAnalytics = () => {
  if (!measurementId || document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => window.dataLayer.push(args);
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
};

export const AnalyticsConsent = () => {
  const { t } = useLanguage();
  const [choice, setChoice] = useState(() => localStorage.getItem('analytics-consent'));

  useEffect(() => {
    if (choice === 'granted') loadAnalytics();
  }, [choice]);

  if (!measurementId || choice) return null;

  const choose = (value) => {
    localStorage.setItem('analytics-consent', value);
    setChoice(value);
  };

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-xl rounded-2xl bg-[#0B132B] p-5 text-white shadow-2xl ring-1 ring-white/20"
      aria-label={t('analytics.title')}
    >
      <h2 className="text-lg font-bold mb-2">{t('analytics.title')}</h2>
      <p className="text-sm text-white/80 leading-relaxed mb-4">{t('analytics.description')}</p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => choose('granted')}
          className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-[#0B132B] hover:bg-white/90"
        >
          {t('analytics.accept')}
        </button>
        <button
          type="button"
          onClick={() => choose('denied')}
          className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
        >
          {t('analytics.decline')}
        </button>
      </div>
    </aside>
  );
};
