import { Fish, Heart } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B132B] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Fish className="w-8 h-8 text-[#3E92CC]" />
              <div>
                <div className="text-xl font-bold">Ballen Fisk</div>
                <div className="text-sm text-white/60">{t('footer.since')}</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Din lokale fiskehandler i Ballen Havn. Vi værner om det gode håndværk og den friske fangst fra Kattegat.
            </p>
          </div>

          <div className="md:col-span-2 rounded-2xl overflow-hidden h-48 bg-gray-800 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1112.5562852234057!2d10.6358333!3d55.8166667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c798e16d44749%3A0x6e9a6e16d44749!2sStrandvejen%2083%2C%208305%20Sams%C3%B8!5e0!3m2!1sda!2sdk!4v1700000000000!5m2!1sda!2sdk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kort over Ballen Fisk"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 overflow-hidden">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/60 mb-2">
              {t('footer.copyright')}
            </p>
            <p className="text-xs text-white/40 italic">
              {t('products.disclaimer')}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
              <span>for Samsø</span>
            </div>
            <div className="text-sm text-white/60">
              <p>Ballen Fisk • Tradition & Kvalitet</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
