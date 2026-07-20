import { useEffect } from 'react';

const REVEAL_SELECTOR = '.reveal-on-scroll:not(.is-revealed)';
const VISIBILITY_RATIO = 0.1;

function isInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewWidth = window.innerWidth || document.documentElement.clientWidth;

  const visibleTop = Math.max(rect.top, 0);
  const visibleBottom = Math.min(rect.bottom, viewHeight);
  const visibleLeft = Math.max(rect.left, 0);
  const visibleRight = Math.min(rect.right, viewWidth);

  if (visibleBottom <= visibleTop || visibleRight <= visibleLeft) return false;

  const visibleArea = (visibleBottom - visibleTop) * (visibleRight - visibleLeft);
  const elementArea = rect.width * rect.height;
  if (elementArea <= 0) return false;

  return visibleArea / elementArea >= VISIBILITY_RATIO;
}

function revealElement(el: Element): void {
  el.classList.add('is-revealed');
}

function scanAndRevealVisible(): void {
  document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
    if (isInViewport(el)) {
      revealElement(el);
    }
  });
}

function observeRevealElements(observer: IntersectionObserver): void {
  document.querySelectorAll('.reveal-on-scroll:not([data-reveal-observed])').forEach((el) => {
    el.setAttribute('data-reveal-observed', 'true');

    if (isInViewport(el)) {
      revealElement(el);
      return;
    }

    observer.observe(el);
  });
}

export function useScrollReveal(isReady: boolean): void {
  useEffect(() => {
    if (!isReady) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: [0, 0.1, 0.15], rootMargin: '0px 0px -8% 0px' },
    );

    const runInitialScan = () => {
      observeRevealElements(observer);
      scanAndRevealVisible();
    };

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(runInitialScan);
    });

    const mutationObserver = new MutationObserver(() => {
      observeRevealElements(observer);
      scanAndRevealVisible();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const handleScrollOrResize = () => scanAndRevealVisible();
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    const fallbackTimer = window.setTimeout(scanAndRevealVisible, 1000);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(fallbackTimer);
      mutationObserver.disconnect();
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      document.querySelectorAll('[data-reveal-observed]').forEach((el) => {
        el.removeAttribute('data-reveal-observed');
      });
    };
  }, [isReady]);
}

export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
