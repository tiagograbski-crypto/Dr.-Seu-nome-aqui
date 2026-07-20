import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface MobileScrollCarouselItem {
  id: string;
  label: string;
  content: ReactNode;
}

interface MobileScrollCarouselProps {
  items: MobileScrollCarouselItem[];
  ariaLabel: string;
  hintStorageKey?: string;
  showCounter?: boolean;
  slideClassName?: string;
  trackClassName?: string;
}

export function MobileScrollCarousel({
  items,
  ariaLabel,
  hintStorageKey,
  showCounter = true,
  slideClassName = 'w-[min(88vw,340px)] shrink-0 snap-start',
  trackClassName = 'flex gap-6 overflow-x-auto no-scrollbar snap-scroll-x pb-2 -mx-1 px-1',
}: MobileScrollCarouselProps) {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(items.length > 1);
  const [showHint, setShowHint] = useState(false);

  const updateScrollState = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < maxScroll - 8);
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: reducedMotion ? 'auto' : 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  }, [reducedMotion]);

  const dismissHint = useCallback(() => {
    setShowHint(false);
    if (hintStorageKey) {
      try {
        localStorage.setItem(hintStorageKey, '1');
      } catch {
        /* ignore */
      }
    }
  }, [hintStorageKey]);

  useEffect(() => {
    if (!hintStorageKey || items.length <= 1) return;

    try {
      if (localStorage.getItem(hintStorageKey)) return;
    } catch {
      /* ignore */
    }

    setShowHint(true);
    const timer = window.setTimeout(dismissHint, 4000);
    return () => window.clearTimeout(timer);
  }, [hintStorageKey, items.length, dismissHint]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex = 0;
        let bestRatio = 0;

        entries.forEach((entry) => {
          const index = slideRefs.current.findIndex((slide) => slide === entry.target);
          if (index >= 0 && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestIndex = index;
          }
        });

        if (bestRatio > 0) setActiveIndex(bestIndex);
      },
      {
        root: container,
        threshold: 0.6,
      },
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    const onScroll = () => {
      updateScrollState();
      if (showHint) dismissHint();
    };

    updateScrollState();
    container.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      observer.disconnect();
      container.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [items.length, updateScrollState, showHint, dismissHint]);

  if (items.length === 0) return null;

  return (
    <div className="md:hidden">
      {items.length > 1 && (
        <div
          className="flex gap-2 mb-5 overflow-x-auto no-scrollbar px-1"
          role="tablist"
          aria-label={`${ariaLabel} — navegação`}
        >
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls={`carousel-slide-${item.id}`}
              onClick={() => scrollToIndex(index)}
              className={`shrink-0 px-4 py-2 rounded-full border text-[10px] uppercase tracking-[0.15em] transition-all duration-300 touch-target ${
                activeIndex === index
                  ? 'bg-rose-nude/15 border-rose-nude/40 text-pearl'
                  : 'bg-transparent border-rose-nude/15 text-muted hover:border-rose-nude/30 hover:text-pearl/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <div className="relative">
        {canScrollLeft && (
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-espresso via-espresso/80 to-transparent"
            aria-hidden="true"
          />
        )}
        {canScrollRight && (
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-espresso via-espresso/80 to-transparent"
            aria-hidden="true"
          />
        )}

        {showHint && canScrollRight && (
          <div
            className={`pointer-events-none absolute right-3 top-1/2 z-20 -translate-y-1/2 flex items-center gap-1.5 rounded-full border border-rose-nude/30 bg-espresso/90 px-3 py-1.5 backdrop-blur-sm ${
              reducedMotion ? '' : 'animate-[fabLabelIn_0.5s_ease-out,fadePulse_2s_ease-in-out_infinite]'
            }`}
            aria-hidden="true"
          >
            <span className="text-[9px] uppercase tracking-[0.2em] text-muted">Deslize</span>
            <ChevronRight size={14} className="text-rose-nude" />
          </div>
        )}

        <div
          ref={containerRef}
          className={trackClassName}
          aria-label={ariaLabel}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              id={`carousel-slide-${item.id}`}
              ref={(el) => {
                slideRefs.current[index] = el;
              }}
              role="tabpanel"
              aria-hidden={activeIndex !== index}
              className={slideClassName}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>

      {items.length > 1 && (
        <div className="mt-5 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2" role="tablist" aria-label={`${ariaLabel} — indicadores`}>
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-label={`Ir para ${item.label}`}
                onClick={() => scrollToIndex(index)}
                className={`rounded-full transition-all duration-300 touch-target ${
                  activeIndex === index
                    ? 'h-2 w-6 bg-rose-nude'
                    : 'h-2 w-2 bg-rose-nude/25 hover:bg-rose-nude/40'
                }`}
              />
            ))}
          </div>

          {showCounter && (
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted tabular-nums" aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
