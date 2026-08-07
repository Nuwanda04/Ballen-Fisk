import { motion } from 'framer-motion';
import { ArrowDown, Flame, Menu, X } from 'lucide-react';
import { useState } from 'react';
import heroImage from '../assets/harbourHero.png';
import { useLanguage } from '../i18n/useLanguage';
import { renderWithStrong } from '../utils/textUtils';
import { LanguageSwitcher } from './LanguageSwitcher';
import { OpenStatus } from './OpenStatus';

const navLinks = [
  ['history', 'nav.history'],
  ['products', 'nav.products'],
  ['contact', 'nav.contact']
];

export const Hero = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const primaryNav = (className) => (
    <nav aria-label={t('nav.primary')} className={className}>
      {navLinks.map(([section, label]) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={() => setIsMenuOpen(false)}
          className="text-xs lg:text-sm font-semibold text-white/75 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-sm transition-colors"
        >
          {t(label)}
        </a>
      ))}
    </nav>
  );

  return (
    <header id="top" className="relative overflow-hidden bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3E92CC]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#3E92CC] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5FA8D3] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <nav className="relative z-50 container flex items-center justify-between py-7 sm:py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex shrink-0 items-center gap-2 sm:gap-3"
        >
          <img
            src="/faviconFish.png"
            alt="Ballen Fisk Logo"
            className="h-8 w-8 object-contain drop-shadow-md sm:h-10 sm:w-10"
          />
          <a href="#top" className="whitespace-nowrap text-xl font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-sm sm:text-2xl">
            Ballen Fisk
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 sm:gap-4"
        >
          {primaryNav('hidden lg:flex items-center gap-5 mr-2')}
          <OpenStatus />
          <LanguageSwitcher />
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>
      </nav>

      <div id="mobile-navigation" className={`${isMenuOpen ? 'block' : 'hidden'} relative z-40 container pb-4 lg:hidden`}>
        {primaryNav('flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-[#0B132B]/70 px-4 py-4 backdrop-blur-md')}
      </div>

      <div className="relative z-10 container min-h-0 flex flex-col justify-center pt-4 pb-[10rem] sm:pb-[12rem] lg:block lg:min-h-0 lg:justify-start lg:pb-[15rem] xl:pb-[16rem] xl2:pb-[17rem] 2xl:pb-[18rem] 2xl3:pb-[24rem] 2xl2:pb-[26rem] 3xl:pb-[30rem] 4xl:pb-[33rem]">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 3xl:gap-14 4xl:gap-20 items-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative block order-last mb-0 lg:mb-0 flex-1 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px] lg:max-w-[600px] xl:max-w-[640px] xl2:max-w-[680px] 2xl:max-w-[720px] 2xl2:max-w-[760px] 3xl:max-w-[820px] 4xl:max-w-[940px] mx-auto lg:ml-auto aspect-[16/10]">
            <div className="w-full h-full rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 relative z-10">
              <img
                src={heroImage}
                alt="Ballen Fisk at Ballen Havn"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:-bottom-6 lg:-left-6 z-20 w-max">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white/90 backdrop-blur-xl p-3 lg:p-6 rounded-2xl lg:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50"
              >
                <div className="flex items-center gap-3 lg:gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-400 rounded-full blur-md opacity-40 animate-pulse" />
                    <div className="relative w-8 h-8 lg:w-14 lg:h-14 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-inner">
                      <Flame className="w-4 h-4 lg:w-7 lg:h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs lg:text-xl font-bold text-[#0B132B] mb-0.5">{t('hero.smokehouseTitle')}</div>
                    <div className="text-[10px] lg:text-sm font-medium text-gray-500">{t('hero.smokehouseSubtitle')}</div>
                  </div>
                </div>
              </motion.div>
            </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 flex flex-col justify-center"
          >


            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-left text-white max-w-2xl w-fit mx-auto lg:mx-0 px-4 md:px-0"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md mb-4 lg:mb-6 border border-white/30 text-sm font-medium tracking-wider uppercase sm:whitespace-nowrap"
              >
                <span className="hidden sm:inline">{renderWithStrong(t('hero.since'))}</span>
                <span className="whitespace-nowrap text-[clamp(0.62rem,3.5vw,0.875rem)] sm:hidden">{t('hero.sinceMobile')}</span>
              </motion.div>

              <h1 className="whitespace-nowrap text-3xl font-black tracking-tighter drop-shadow-2xl md:text-6xl lg:text-6xl xl:text-7xl 3xl:text-8xl 4xl:text-9xl mb-4 lg:mb-6">
                {t('hero.title')}
              </h1>

              <p className="text-lg md:text-xl 3xl:text-2xl font-medium mb-6 lg:mb-8 opacity-90 text-balance leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            <p className="text-base md:text-lg 3xl:text-xl text-white/60 mb-8 leading-relaxed text-left max-w-lg 3xl:max-w-xl mx-auto lg:mx-0 px-4 md:px-0">
              {renderWithStrong(t('hero.description'))}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="group relative mt-2 px-8 py-4 3xl:px-10 3xl:py-5 bg-white text-[#0B132B] border-2 border-[#0B132B] rounded-full font-bold text-lg 3xl:text-xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-3 mx-auto lg:mx-0 w-fit"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              <div className="absolute inset-0 rounded-full ring-2 ring-orange-400 opacity-0 group-hover:animate-ping group-hover:opacity-30" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-[1px] left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto block" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <div className="shape-divider-grid shape-divider-grid--hero" />
      </div>
    </header>
  );
};
