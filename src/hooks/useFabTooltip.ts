import { useCallback, useEffect, useState } from 'react';

const FAB_TOOLTIP_KEY = 'clinica-fab-tooltip-seen';

interface UseFabTooltipResult {
  showTooltip: boolean;
  dismissTooltip: () => void;
}

export function useFabTooltip(visible: boolean, isReady: boolean): UseFabTooltipResult {
  const [showTooltip, setShowTooltip] = useState(false);

  const dismissTooltip = useCallback(() => {
    setShowTooltip(false);
    try {
      sessionStorage.setItem(FAB_TOOLTIP_KEY, '1');
    } catch {
      /* private browsing */
    }
  }, []);

  useEffect(() => {
    if (!visible || !isReady) return;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(FAB_TOOLTIP_KEY) === '1';
    } catch {
      /* private browsing */
    }

    if (alreadySeen) return;

    const showTimer = window.setTimeout(() => setShowTooltip(true), 900);
    const hideTimer = window.setTimeout(() => dismissTooltip(), 7000);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [visible, isReady, dismissTooltip]);

  useEffect(() => {
    if (!showTooltip) return;

    const onScroll = () => dismissTooltip();
    window.addEventListener('scroll', onScroll, { passive: true, once: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [showTooltip, dismissTooltip]);

  return { showTooltip, dismissTooltip };
}
