import { X } from 'lucide-react';
import { buildWhatsAppLink, SITE } from '../../config/site';
import { getWhatsAppCta } from '../../config/whatsappCta';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useFabTooltip } from '../../hooks/useFabTooltip';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface FloatingWhatsAppButtonProps {
  visible: boolean;
  isReady: boolean;
}

function trackWhatsAppClick(section: string, label: string): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'whatsapp_cta_click',
    cta_location: 'floating_button',
    section,
    cta_label: label,
  });
}

export function FloatingWhatsAppButton({ visible, isReady }: FloatingWhatsAppButtonProps) {
  const reducedMotion = useReducedMotion();
  const activeSection = useActiveSection(isReady);
  const { showTooltip, dismissTooltip } = useFabTooltip(visible, isReady);

  const cta = getWhatsAppCta(activeSection);
  const href = buildWhatsAppLink(SITE.contact.whatsAppNumber, cta.message);

  const handleClick = () => {
    dismissTooltip();
    trackWhatsAppClick(activeSection, cta.label);
  };

  return (
    <div
      className={`fixed z-50 flex flex-col items-end gap-2
        right-4 sm:right-6 md:right-10
        bottom-[max(calc(4.5rem+env(safe-area-inset-bottom)),1rem)] sm:bottom-6 md:bottom-10
        transition-all duration-700
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}
    >
      {showTooltip && (
        <div
          role="tooltip"
          className="relative max-w-[220px] animate-[fadeInUp_0.45s_ease-out_both] bg-charcoal/95 backdrop-blur-xl border border-rose-nude/25 rounded-sm px-4 py-3 shadow-elevated"
        >
          <button
            type="button"
            onClick={dismissTooltip}
            className="absolute top-2 right-2 text-muted hover:text-pearl transition-colors touch-target flex items-center justify-center w-6 h-6"
            aria-label="Fechar dica"
          >
            <X size={12} aria-hidden="true" />
          </button>

          <p className="text-rose-nude text-[9px] uppercase tracking-[0.25em] mb-1.5 pr-4">
            Atendimento exclusivo
          </p>
          <p className="text-pearl text-xs leading-relaxed pr-2">
            Resposta personalizada em minutos. Avaliação sob medida para você.
          </p>

          <span
            className="absolute -bottom-1.5 right-8 w-3 h-3 bg-charcoal/95 border-r border-b border-rose-nude/25 rotate-45"
            aria-hidden="true"
          />
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={cta.ariaLabel}
        onClick={handleClick}
        className="group relative flex items-center justify-center gap-2.5
          px-4 py-3 sm:px-5 sm:py-4
          min-h-[3rem] touch-target
          bg-rose-nude text-espresso
          border border-rose-nude/80
          rounded-full
          shadow-cta
          font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-widest
          transition-all duration-500
          hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-10px_rgb(213_174_174_/_0.65)]
          active:scale-95 active:translate-y-0
          overflow-hidden"
      >
        {!reducedMotion && (
          <span
            className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-pearl/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            aria-hidden="true"
          />
        )}

        {!reducedMotion && (
          <span
            className="absolute inset-0 rounded-full border border-rose-nude/50 animate-ping opacity-20"
            aria-hidden="true"
          />
        )}

        <span className="relative flex items-center justify-center w-5 h-5 shrink-0">
          <WhatsAppIcon className="w-full h-full" />
        </span>

        <span
          key={cta.label}
          aria-live="polite"
          className="relative whitespace-nowrap animate-[fabLabelIn_0.35s_ease-out_both]"
        >
          {cta.label}
        </span>
      </a>
    </div>
  );
}
