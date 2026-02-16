import { motion } from 'framer-motion';
import { Calendar, Fish, Sparkles, Store } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const History = () => {
  const { t } = useLanguage();

  const timeline = [
    {
      year: '1985',
      icon: Fish,
      title: t('history.founded'),
      description: t('history.story1')
    },
    {
      year: '1996',
      icon: Store,
      title: t('history.shopOpened'),
      description: t('history.story2')
    },
    {
      year: '2005',
      icon: Sparkles,
      title: t('history.milestoneTitle'),
      description: t('history.milestoneDesc')
    },
    {
      year: '2025',
      icon: Calendar,
      title: '40 År',
      description: t('history.story3')
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3E92CC] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B132B] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#0B132B] mb-4">
            {t('history.title')}
          </h2>
          <p className="text-xl text-gray-600">{t('history.founder')}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3E92CC] via-[#3E92CC] to-[#0B132B] transform -translate-x-1/2 hidden lg:block" />

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-16 flex items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-12`}
              >
                <div className={`lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'} mb-8 lg:mb-0`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3E92CC] to-[#0B132B] rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-5xl font-bold text-[#3E92CC]">{item.year}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0B132B] mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>

                <div className="hidden lg:block w-2/12 flex-shrink-0">
                  <div className="w-6 h-6 bg-white border-4 border-[#3E92CC] rounded-full mx-auto" />
                </div>

                <div className="lg:w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
        <svg viewBox="0 0 1440 200" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#0B132B"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,200L0,200Z"
          />
        </svg>
      </div>
    </section>
  );
};
