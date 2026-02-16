import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Clock, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  const openingHours = [
    { period: '1. Juni - 1. September', hours: 'Man-Søn 10:00-18:00' },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#0B132B] mb-4">
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3E92CC] to-[#0B132B] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B132B] mb-2">
                    {t('contact.address')}
                  </h3>
                  <p className="text-gray-600">
                    Strandvejen 83<br />
                    8305 Ballen Havn<br />
                    Samsø, Danmark
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3E92CC] to-[#0B132B] rounded-xl flex items-center justify-center flex-shrink-0">
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
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-[#3E92CC]" />
              <h3 className="text-2xl font-bold text-[#0B132B]">
                {t('status.openingHours')}
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {openingHours.map((schedule, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="font-semibold text-[#0B132B] mb-1">{schedule.period}</div>
                  <div className="text-gray-600">{schedule.hours}</div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                {t('status.disclaimer')}
              </p>
            </div>

            <div className="mt-8 aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2232.8!2d10.6387!3d55.8164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ4JzU5LjAiTiAxMMKwMzgnMTkuMyJF!5e0!3m2!1sda!2sdk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ballen Fisk Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
