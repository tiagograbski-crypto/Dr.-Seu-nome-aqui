import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../../config/site';

interface FloatingWhatsAppButtonProps {
  visible: boolean;
}

export function FloatingWhatsAppButton({ visible }: FloatingWhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className={`fixed z-40 flex items-center justify-center bg-espresso/90 backdrop-blur-xl border border-rose-nude/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-700 hover:scale-105 hover:bg-rose-nude hover:text-espresso hover:border-espresso text-rose-nude group touch-target
        right-4 sm:right-6 md:right-10
        bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-6 md:bottom-10
        w-14 h-14 sm:w-auto sm:h-auto sm:px-5 sm:py-4 rounded-full gap-0 sm:gap-3
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
    >
      <MessageCircle size={22} className="transition-colors duration-300 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline font-bold text-[11px] tracking-widest uppercase mt-0.5">
        Agendar
      </span>
      <span className="absolute top-0 right-0 flex h-3 w-3 -mt-1 -mr-1" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-nude opacity-75 group-hover:bg-espresso" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-nude group-hover:bg-espresso" />
      </span>
    </a>
  );
}
