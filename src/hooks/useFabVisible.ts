import { useEffect, useState } from 'react';

const MD_BREAKPOINT = 768;

export function useFabVisible(isReady: boolean, scrolled: boolean): boolean {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < MD_BREAKPOINT,
  );
  const [portfolioReached, setPortfolioReached] = useState(false);

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

  if (!isMobile) return scrolled;
  return portfolioReached;
}
