import { motion } from 'framer-motion';
import { Clock, Facebook, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../i18n/useLanguage';
import { SectionAtmosphere } from './SectionAtmosphere';
import { renderWithStrongDark } from '../utils/textUtils';

const parseScheduleHours = (hours) => hours.split(' · ').map((part) => {
  const match = part.match(/^(.*?)\s+(\d{2}:\d{2}–\d{2}:\d{2})$/);
  return match ? { label: match[1], time: match[2] } : { label: '', time: part };
});

export const Contact = () => {
  const { t } = useLanguage();

  const openingHours = t('contact.schedule');
  const scheduleColumns = openingHours[0] ? parseScheduleHours(openingHours[0].hours) : [];

  return (
    <section id="contact" className="relative py-12 md:py-24 bg-white overflow-hidden">
      <SectionAtmosphere />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#FF7EB9]/[0.12] blur-[90px]" />
      <div className="pointer-events-none absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-[#FDBA74]/[0.13] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#86EFAC]/[0.10] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#E376D4]/[0.09] blur-[110px]" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-12 max-w-2xl w-fit mx-auto px-4 md:px-0"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B132B] mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {renderWithStrongDark(t('contact.intro'))}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="border-t-4 border-[#EF4444] bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EF4444] to-[#B91C1C] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B132B] mb-2">
                    {t('contact.address')}
                  </h3>
                  <p className="text-gray-600">
                    {t('contact.street')}<br />
                    {t('contact.postalCity')}<br />
                    {t('contact.country')}
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Havnevej%203%2C%208305%20Sams%C3%B8%2C%20Denmark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-semibold text-[#3E92CC] hover:underline"
                  >
                    {t('contact.directions')}
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t-4 border-[#FDBA74] bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B132B] mb-2">
                    {t('contact.phone')}
                  </h3>
                  <a href="tel:+4523116414" className="text-[#3E92CC] hover:underline text-lg">
                    +45 23 11 64 14
                  </a>
                </div>
              </div>
            </div>

            <motion.a
              href="https://www.facebook.com/ballenfisksamsoe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="block bg-gradient-to-r from-[#3E92CC] to-[#5FA8D3] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all text-white"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    {t('contact.facebook')}
                  </h3>
                  <p className="text-white/80">@ballenfisksamsoe</p>
                </div>
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-t-4 border-[#0B132B] bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#3E92CC]" />
              <h3 className="text-2xl font-bold text-[#0B132B]">
                {t('status.openingHours')}
              </h3>
            </div>

            <div className="mb-8 overflow-hidden rounded-xl border border-[#CBD5E1]">
              <table className="w-full table-fixed border-collapse text-left">
                <thead className="bg-[#0B132B] text-white">
                  <tr>
                    <th scope="col" className="w-[34%] px-3 py-3 text-xs font-bold uppercase tracking-wide sm:px-4">
                      {t('contact.season')}
                    </th>
                    {scheduleColumns.map((column) => (
                      <th key={column.label} scope="col" className="px-3 py-3 text-xs font-bold uppercase tracking-wide sm:px-4">
                        {column.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {openingHours.map((schedule, index) => {
                    const hours = parseScheduleHours(schedule.hours);
                    const isAlternate = index % 2 === 1;

                    return (
                      <tr key={schedule.period} className={isAlternate ? 'bg-[#F4F8FB]' : 'bg-white'}>
                        <th scope="row" className="border-t border-[#E2E8F0] px-3 py-4 text-sm font-bold text-[#0B132B] sm:px-4">
                          {schedule.period}
                        </th>
                        {hours.length === 1 ? (
                          [0, 1].map((column) => (
                            <td key={column} className="border-t border-[#E2E8F0] px-3 py-4 text-sm font-semibold text-[#0B132B] sm:px-4">
                              {hours[0].time}
                            </td>
                          ))
                        ) : (
                          hours.map((hour) => (
                            <td key={hour.label} className="border-t border-[#E2E8F0] px-3 py-4 text-sm text-[#0B132B]/75 sm:px-4">
                              <span className="block font-semibold text-[#0B132B]">{hour.time}</span>
                            </td>
                          ))
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>




          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-6xl rounded-2xl bg-white p-4 shadow-xl md:mt-10 md:p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-[#3E92CC]" aria-hidden="true" />
            <h3 className="text-2xl font-bold text-[#0B132B]">
              {t('contact.mapTitle')}
            </h3>
          </div>
          <div className="aspect-[16/7] overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Havnevej+3,+8305+Sams%C3%B8,+Denmark&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('contact.mapTitle')}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
