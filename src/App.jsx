import { Contact } from './components/Contact';
import { AnalyticsConsent } from './components/AnalyticsConsent';
import { MotionConfig } from 'framer-motion';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { History } from './components/History';
import { Products } from './components/Products';
import { LanguageProvider } from './i18n/LanguageContext';
import { useLanguage } from './i18n/useLanguage';

const SkipLink = () => {
  const { t } = useLanguage();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-[#0B132B] focus:shadow-xl"
    >
      {t('nav.skip')}
    </a>
  );
};

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-white">
          <Hero />
          <SkipLink />
          <main id="main">
            <History />
            <Products />
            <Contact />
          </main>
          <Footer />
          <AnalyticsConsent />
        </div>
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
