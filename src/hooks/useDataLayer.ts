import { useEffect } from 'react';

export function useDataLayer(): void {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_type: 'landing_page',
      niche: 'clinica_estetica',
    });
  }, []);
}
