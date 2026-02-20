import { Heart } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0B132B] text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
          <div className="flex items-center gap-3">
            <img
              src="/faviconFish.png"
              alt="Ballen Fisk Logo"
              className="w-10 h-10 object-contain drop-shadow-md"
            />
            <div>
              <div className="text-xl font-bold">Ballen Fisk</div>
              <div className="text-sm text-white/60">{t('footer.since')}</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-white/60 mb-1">
              {t('footer.copyright').replace('{year}', new Date().getFullYear())}
            </p>
            <p className="text-xs text-white/40 italic">
              {t('products.disclaimer')}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" />
              <span>in Samsø</span>
            </div>
            <div className="text-sm text-white/60">
              <p>Ballen Fisk • {t('footer.tagline')}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
