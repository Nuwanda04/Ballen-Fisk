import { motion } from 'framer-motion';
import { Calendar, Fish, Sparkles, Store } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const yearColors = {
  '1985': { bg: 'from-[#5FA8D3] to-[#3E92CC]', dot: 'border-[#5FA8D3]', line: 'bg-[#5FA8D3]' },
  '1996': { bg: 'from-[#3E92CC] to-[#2A7AB8]', dot: 'border-[#3E92CC]', line: 'bg-[#3E92CC]' },
  '2005': { bg: 'from-[#2A7AB8] to-[#1C2541]', dot: 'border-[#2A7AB8]', line: 'bg-[#2A7AB8]' },
  '2025': { bg: 'from-[#1C2541] to-[#0B132B]', dot: 'border-[#1C2541]', line: 'bg-[#1C2541]' },
};

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
    <section className="relative z-20 pt-0 pb-20 bg-white overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-[#0B132B] mb-4">
            {t('history.title')}
          </h2>
          <p className="text-xl text-gray-600">{t('history.founder')}</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3E92CC] via-[#5FA8D3] to-[#0B132B] transform -translate-x-1/2 hidden lg:block" />

          {/* Mobile Left Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3E92CC] via-[#5FA8D3] to-[#0B132B] lg:hidden" />

          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            const colors = yearColors[item.year] || yearColors['1985'];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative mb-12 last:mb-0 lg:-mb-8 lg:last:mb-0 flex items-start lg:items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8 pl-12 lg:pl-0`}
              >
                {/* Mobile Connector Dot & Line */}
                <div className="absolute left-4 top-12 -translate-x-1/2 flex items-center lg:hidden">
                   <div className={`w-4 h-4 bg-white border-4 ${colors.dot} rounded-full z-10 relative`} />
                   <div className={`h-[2px] w-8 ${colors.line}`} />
                </div>

                <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'} mb-0 lg:mb-0`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`p-6 lg:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all bg-gradient-to-br ${colors.bg} text-white relative z-10`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-black text-white tracking-tight">
                        {item.year}
                      </div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm font-medium">{item.description}</p>
                  </motion.div>
                </div>

                <div className="hidden lg:flex w-2/12 flex-shrink-0 relative items-center justify-center h-full">
                  <div className={`w-5 h-5 bg-white border-4 ${colors.dot} rounded-full z-10 shadow-md relative`} />
                  <div className={`absolute top-1/2 -translate-y-1/2 h-[2px] w-[calc(50%+2rem)] ${colors.line} ${isEven ? 'right-1/2' : 'left-1/2'}`} />
                </div>

                <div className="lg:w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
