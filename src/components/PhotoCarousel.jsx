import { ChevronLeft, ChevronRight } from 'lucide-react';
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
import heroShop from '../assets/butikHero.jpg';
import { SectionAtmosphere } from './SectionAtmosphere';

const slides = [
  ['terraceHarbor', terraceHarbor],
  ['fishTerrace', fishTerrace],
  ['heroShop', heroShop],
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
  const touchStartX = useRef(null);

  useEffect(() => {
    slides.forEach(([, source]) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = source;
    });
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

  const [slideKey, image] = slides[currentSlide];
  const imagePosition = slideKey === 'lobsterHandling' ? 'center 22%' : 'center';

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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
        >
          <div
            className="relative aspect-[16/10] touch-pan-y overflow-hidden rounded-3xl bg-[#0B132B] shadow-2xl md:aspect-[16/9]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              key={slideKey}
              src={image}
              alt={t(`gallery.images.${slideKey}`)}
              className="h-full w-full object-cover"
              style={{ objectPosition: imagePosition }}
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/75 via-transparent to-transparent" />

            <button
              type="button"
              onClick={() => goToSlide(currentSlide - 1)}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B132B]/75 text-white backdrop-blur-sm transition hover:bg-[#0B132B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 md:left-5"
              aria-label={t('gallery.previous')}
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => goToSlide(currentSlide + 1)}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B132B]/75 text-white backdrop-blur-sm transition hover:bg-[#0B132B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 md:right-5"
              aria-label={t('gallery.next')}
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white md:bottom-7 md:left-8 md:right-8">
              <p className="text-sm font-semibold md:text-base">
                {t(`gallery.images.${slideKey}`)}
              </p>
              <p className="text-xs font-medium text-white/80" aria-live="polite">
                {currentSlide + 1} / {slides.length}
              </p>
            </div>
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
