import { useEffect } from 'react';

function observeRevealElements(observer: IntersectionObserver): void {
  document.querySelectorAll('.reveal-on-scroll:not([data-reveal-observed])').forEach((el) => {
    el.setAttribute('data-reveal-observed', 'true');
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
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    );

    const frame = requestAnimationFrame(() => observeRevealElements(observer));

    const mutationObserver = new MutationObserver(() => {
      observeRevealElements(observer);
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mutationObserver.disconnect();
      observer.disconnect();
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
