import { useEffect, useState } from 'react';

const MD_BREAKPOINT = 768;
const B2B_GUIDE_VISIBLE_RATIO = 0.1;

function getSectionRatioInViewport(section: HTMLElement): number {
  const rect = section.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

  if (visibleHeight <= 0) {
    return 0;
  }

  return visibleHeight / viewportHeight;
}

function isInsideB2bGuide(): boolean {
  const section = document.getElementById('b2b-owner-guide');
  if (!section) {
    return false;
  }

  const rect = section.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.bottom <= 0 || rect.top >= viewportHeight) {
    return false;
  }

  return getSectionRatioInViewport(section) >= B2B_GUIDE_VISIBLE_RATIO;
}

export function useFabVisible(isReady: boolean, scrolled: boolean): boolean {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < MD_BREAKPOINT,
  );
  const [portfolioReached, setPortfolioReached] = useState(false);
  const [inB2bGuide, setInB2bGuide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MD_BREAKPOINT - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isReady || !isMobile) {
      setPortfolioReached(false);
      return;
    }

    const portfolio = document.getElementById('portfolio');
    if (!portfolio) return;

    const update = () => {
      const { top } = portfolio.getBoundingClientRect();
      setPortfolioReached(top <= window.innerHeight * 0.85);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [isReady, isMobile]);

  useEffect(() => {
    if (!isReady) {
      setInB2bGuide(false);
      return;
    }

    const update = () => setInB2bGuide(isInsideB2bGuide());

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [isReady]);

  if (inB2bGuide) {
    return false;
  }

  if (!isMobile) return scrolled;
  return portfolioReached;
}
