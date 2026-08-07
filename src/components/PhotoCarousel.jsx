import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import fishCounter from '../assets/carousel/fish-counter.jpg';
import fishOnIce from '../assets/carousel/fish-on-ice.jpg';
import fishTerrace from '../assets/carousel/fish-terrace.jpg';
import liveLobster from '../assets/carousel/live-lobster.jpg';
import lobsterHandling from '../assets/carousel/lobster-handling.jpg';
import shopCloseUp from '../assets/carousel/shop-close-up.jpg';
import shopFront from '../assets/carousel/shop-front.jpg';
import shopFrontSky from '../assets/carousel/shop-front-sky.jpg';
import terraceExterior from '../assets/carousel/terrace-exterior.jpg';
import terraceHarbor from '../assets/carousel/terrace-harbor.jpg';
import oldHero from '../assets/butik-billede.jpg';
import { SectionAtmosphere } from './SectionAtmosphere';

const slides = [
  ['terraceHarbor', terraceHarbor],
  ['fishTerrace', fishTerrace],
  ['oldHero', oldHero],
  ['shopFront', shopFront],
  ['shopCloseUp', shopCloseUp],
  ['fishCounter', fishCounter],
  ['fishOnIce', fishOnIce],
  ['terraceExterior', terraceExterior],
  ['shopFrontSky', shopFrontSky],
  ['lobsterHandling', lobsterHandling],
  ['liveLobster', liveLobster]
];

export const PhotoCarousel = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    slides.forEach(([, source]) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = source;
    });
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateViewport = () => setIsMobile(mediaQuery.matches);
    updateViewport();
    mediaQuery.addEventListener('change', updateViewport);
    return () => mediaQuery.removeEventListener('change', updateViewport);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToSlide(currentSlide - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToSlide(currentSlide + 1);
    }
  };

  const handleTouchStart = (event) => {
    setIsPaused(true);
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0]?.clientX - touchStartX.current;
    if (Math.abs(distance) >= 40) {
      goToSlide(currentSlide + (distance < 0 ? 1 : -1));
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  const getRelativePosition = (index) => {
    let distance = index - currentSlide;
    if (distance > slides.length / 2) distance -= slides.length;
    if (distance < -slides.length / 2) distance += slides.length;
    return distance;
  };

  const getCardPosition = (position) => {
    if (position === -1) return { left: '-3%', scale: 0.94, opacity: 1, zIndex: 30 };
    if (position === 1) return { left: '55%', scale: 0.94, opacity: 1, zIndex: 30 };
    return { left: isMobile ? '8%' : '14%', scale: 1, opacity: 1, zIndex: 40 };
  };

  return (
    <section id="gallery" className="relative overflow-hidden bg-white py-16 md:py-24">
      <SectionAtmosphere />
      <div className="container relative z-10">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-[#0B132B] md:text-5xl">
            {t('gallery.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div
          className="mx-auto max-w-5xl outline-none focus-visible:ring-4 focus-visible:ring-[#3E92CC]/40"
          role="region"
          aria-roledescription="carousel"
          aria-label={t('gallery.label')}
          tabIndex="0"
          onKeyDown={handleKeyDown}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
        >
          <div
            className="relative aspect-[16/10] touch-pan-y overflow-visible rounded-3xl bg-transparent md:aspect-[16/9]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map(([slideKey, image], index) => {
              const position = getRelativePosition(index);
              if (Math.abs(position) > 1) return null;
              const imagePosition = slideKey === 'lobsterHandling' ? 'center 22%' : 'center';
              const cardPosition = getCardPosition(position);

              return (
                <motion.div
                  key={slideKey}
                  className={`absolute top-0 h-full overflow-hidden rounded-3xl shadow-2xl ${position === 0 ? 'w-[84%] bg-[#0B132B] md:w-[72%]' : 'w-[52%] bg-[#E8F2F8] md:w-[48%]'}`}
                  animate={cardPosition}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden={position !== 0}
                >
                  <img
                    src={image}
                    alt={position === 0 ? t(`gallery.images.${slideKey}`) : ''}
                    className={`h-full w-full object-cover ${position === 0 ? '' : 'opacity-70'}`}
                    style={{ objectPosition: imagePosition }}
                    loading="eager"
                    decoding="async"
                  />
                  {position === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/60 via-transparent to-transparent" />
                  )}
                  {position === 0 && (
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white md:bottom-7 md:left-8 md:right-8">
                      <p className="text-sm font-semibold md:text-base">
                        {t(`gallery.images.${slideKey}`)}
                      </p>
                      <p className="text-xs font-medium text-white/80" aria-live="polite">
                        {currentSlide + 1} / {slides.length}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}

            <button
              type="button"
              onClick={() => goToSlide(currentSlide - 1)}
              className="absolute left-1 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B132B]/85 text-white shadow-lg backdrop-blur-sm transition hover:bg-[#0B132B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 md:-left-20 md:h-11 md:w-11"
              aria-label={t('gallery.previous')}
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goToSlide(currentSlide + 1)}
              className="absolute right-1 top-1/2 z-50 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B132B]/85 text-white shadow-lg backdrop-blur-sm transition hover:bg-[#0B132B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 md:-right-20 md:h-11 md:w-11"
              aria-label={t('gallery.next')}
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6" aria-hidden="true" />
            </button>

          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2" role="tablist" aria-label={t('gallery.chooseSlide')}>
            {slides.map(([key], index) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={currentSlide === index}
                aria-label={`${t('gallery.goTo')} ${index + 1}: ${t(`gallery.images.${key}`)}`}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3E92CC] focus-visible:ring-offset-2 ${
                  currentSlide === index
                    ? 'w-8 bg-[#0B132B]'
                    : 'w-2.5 bg-[#3E92CC]/40 hover:bg-[#3E92CC]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
