import { Menu } from 'lucide-react';
import { NAV_ITEMS } from '../../data/content';
import { WHATSAPP_LINK } from '../../config/site';
import { scrollToSection } from '../../hooks/useScrollReveal';

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  return (
    <>
      <header
        className={`fixed safe-top left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-5xl z-40 transition-all duration-700 rounded-full top-2 sm:top-4 ${
          scrolled
            ? 'bg-espresso/90 backdrop-blur-xl py-2.5 sm:py-3 px-3 sm:px-6 border border-rose-nude/20 shadow-[0_8px_30px_rgb(0,0,0,0.5)] translate-y-0 opacity-100 pointer-events-auto'
            : 'bg-transparent py-4 px-4 opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex justify-between items-center gap-2 sm:gap-4 min-h-[2.75rem]">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-muted tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[9px] sm:text-[10px] hover:text-pearl transition-colors touch-target flex items-center shrink-0"
            aria-label="Voltar ao topo"
          >
            A Clínica
          </button>

          <nav
            className="hidden md:flex items-center gap-4 lg:gap-6"
            aria-label="Navegação principal"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-muted text-[10px] uppercase tracking-widest hover:text-rose-nude transition-colors touch-target flex items-center"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            id="cta-header-agendar"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pearl text-[9px] sm:text-[10px] uppercase tracking-widest font-bold hover:text-rose-nude transition-colors touch-target flex items-center shrink-0 px-1"
          >
            Agendar
          </a>
        </div>
      </header>

      {/* Mobile: quick nav strip when scrolled */}
      <nav
        className={`md:hidden fixed left-0 right-0 z-30 transition-all duration-500 safe-top ${
          scrolled
            ? 'top-[3.25rem] opacity-100 translate-y-0 pointer-events-auto'
            : 'top-[3.25rem] opacity-0 -translate-y-2 pointer-events-none'
        }`}
        aria-label="Navegação rápida mobile"
      >
        <div className="section-shell">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar snap-scroll-x py-2 px-1 bg-espresso/85 backdrop-blur-lg border border-rose-nude/15 rounded-full shadow-lg">
            <Menu size={14} className="text-rose-nude shrink-0 ml-2" aria-hidden="true" />
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="shrink-0 snap-start px-3 py-2 text-[9px] uppercase tracking-widest text-muted hover:text-pearl bg-charcoal/60 border border-rose-nude/10 rounded-full touch-target flex items-center whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
