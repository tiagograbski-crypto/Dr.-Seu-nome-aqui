import { NAV_ITEMS } from '../../data/content';
import { WHATSAPP_LINK } from '../../config/site';
import { scrollToSection } from '../../hooks/useScrollReveal';
import { BrandMark } from '../ui/BrandMark';

interface HeaderProps {
  scrolled: boolean;
}

export function Header({ scrolled }: HeaderProps) {
  return (
    <>
      <header className="md:hidden fixed top-0 inset-x-0 z-50 safe-top bg-espresso/80 backdrop-blur-lg border-b border-rose-nude/10">
        <div className="section-shell flex justify-between items-center min-h-[3rem] gap-3">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="tracking-[0.12em] uppercase text-[10px] hover:opacity-90 transition-opacity touch-target flex items-center shrink-0 max-w-[55vw] truncate"
            aria-label="Voltar ao topo"
          >
            <BrandMark
              prefixClassName="text-rose-nude font-semibold"
              nameClassName="text-pearl font-light"
            />
          </button>

          <a
            id="cta-header-agendar"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pearl text-[10px] uppercase tracking-widest font-bold bg-rose-nude/15 border border-rose-nude/30 px-3 py-1.5 rounded-sm hover:bg-rose-nude hover:text-espresso transition-colors touch-target flex items-center shrink-0"
          >
            Agendar
          </a>
        </div>
      </header>

      <header
        className={`hidden md:block fixed safe-top left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-40 transition-all duration-700 rounded-full top-4 ${
          scrolled
            ? 'bg-espresso/90 backdrop-blur-xl py-3 px-6 border border-rose-nude/20 shadow-[0_8px_30px_rgb(0,0,0,0.5)] translate-y-0 opacity-100 pointer-events-auto'
            : 'bg-transparent py-4 px-4 opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex justify-between items-center gap-4 min-h-[2.75rem]">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="tracking-[0.2em] uppercase text-[10px] hover:opacity-90 transition-opacity touch-target flex items-center shrink-0"
            aria-label="Voltar ao topo"
          >
            <BrandMark
              prefixClassName="text-rose-nude font-semibold"
              nameClassName="text-muted font-light hover:text-pearl transition-colors"
            />
          </button>

          <nav className="flex items-center gap-4 lg:gap-6" aria-label="Navegação principal">
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
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pearl text-[10px] uppercase tracking-widest font-bold hover:text-rose-nude transition-colors touch-target flex items-center shrink-0 px-1"
          >
            Agendar
          </a>
        </div>
      </header>
    </>
  );
}
