import { useEffect, useState } from 'react';
import { WHATSAPP_SECTION_IDS, type WhatsAppSectionId } from '../config/whatsappCta';

export function useActiveSection(isReady: boolean): WhatsAppSectionId {
  const [activeSection, setActiveSection] = useState<WhatsAppSectionId>('default');

  useEffect(() => {
    if (!isReady) return;

    const elements = WHATSAPP_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (elements.length === 0) return;

    const visibility = new Map<string, number>();

    const pickActive = () => {
      let bestId: WhatsAppSectionId = 'default';
      let bestRatio = 0;

      visibility.forEach((ratio, id) => {
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id as WhatsAppSectionId;
        }
      });

      if (bestRatio >= 0.12) {
        setActiveSection(bestId);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.intersectionRatio);
        });
        pickActive();
      },
      {
        threshold: [0, 0.12, 0.25, 0.4, 0.6, 0.8, 1],
        rootMargin: '-18% 0px -32% 0px',
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isReady]);

  return activeSection;
}
