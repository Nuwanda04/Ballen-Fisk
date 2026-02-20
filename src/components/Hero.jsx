import { motion } from 'framer-motion';
import { ArrowDown, Flame } from 'lucide-react';
import heroImage from '../assets/butik-billede.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { renderWithStrong } from '../utils/textUtils';
import { LanguageSwitcher } from './LanguageSwitcher';
import { OpenStatus } from './OpenStatus';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3E92CC]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#3E92CC] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5FA8D3] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <nav className="relative z-50 container py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <img
            src="/faviconFish.png"
            alt="Ballen Fisk Logo"
            className="w-10 h-10 object-contain drop-shadow-md"
          />
          <span className="text-2xl font-bold text-white">Ballen Fisk</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <OpenStatus />
          <LanguageSwitcher />
        </motion.div>
      </nav>

      <div className="relative z-10 container pt-4 pb-32 lg:pb-20 flex flex-col lg:block min-h-[calc(100vh-80px)] lg:min-h-0 lg:h-auto justify-center lg:justify-start">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative block order-last mb-0 lg:mb-0 flex-1 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[280px] lg:max-w-xl mx-auto lg:ml-auto aspect-square">
            <div className="w-full h-full rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 relative z-10">
              <img
                src={heroImage}
                alt="Fresh fish on ice"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/60 to-transparent" />
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
                className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md mb-4 lg:mb-6 border border-white/30 text-sm font-medium tracking-wider uppercase"
              >
                {renderWithStrong(t('hero.since'))}
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 lg:mb-6 tracking-tighter drop-shadow-2xl">
                {t('hero.title')}
              </h1>

              <p className="text-xl md:text-2xl font-medium mb-6 lg:mb-8 opacity-90 text-balance leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            <p className="text-lg text-white/60 mb-8 leading-relaxed text-left max-w-lg mx-auto lg:mx-0 px-4 md:px-0">
              {renderWithStrong(t('hero.description'))}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="group relative px-8 py-4 bg-white text-[#0B132B] border-2 border-[#0B132B] rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-3 mx-auto lg:mx-0 w-fit"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              <div className="absolute inset-0 rounded-full ring-2 ring-white/50 animate-ping opacity-20" />
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
      </div>
    </div>
  );
};
