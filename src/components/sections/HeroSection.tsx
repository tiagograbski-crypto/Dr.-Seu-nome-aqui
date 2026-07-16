import { ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK, SITE } from '../../config/site';
import { scrollToSection } from '../../hooks/useScrollReveal';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex flex-col justify-end pb-[max(6rem,env(safe-area-inset-bottom))] sm:pb-24 px-4 sm:px-6 md:pb-32 pt-[calc(3rem+env(safe-area-inset-top,0px))] md:pt-0 overflow-hidden"
      aria-label="Apresentação principal"
    >
      <div className="absolute inset-0 w-full h-full bg-espresso">
        <img
          src={SITE.hero.backgroundImage.defaultJpg}
          alt="Cliente em ambiente de clínica estética premium"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-[center_22%] sm:object-[center_30%] md:object-center
            opacity-65 sm:opacity-50 md:opacity-40
            saturate-[1.08] sm:saturate-100
            md:mix-blend-luminosity
            animate-[cinematicPan_30s_ease-in-out_infinite_alternate] origin-center
            scale-100 sm:scale-105 md:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-espresso/10 sm:via-espresso/65 md:via-espresso/60 md:to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto md:max-w-3xl flex flex-col items-center text-center gap-8 animate-[fadeInUp_1.5s_ease-out_0.9s_both]">
        <h1 className="text-2xl leading-snug sm:text-4xl md:text-5xl font-light tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pearl via-rose-nude to-pearl bg-[length:200%_auto] animate-[shimmerText_8s_linear_infinite] text-balance px-1">
          A engenharia estética{' '}
          <br className="hidden md:block" />
          <span
            className="text-muted text-lg md:text-2xl mt-2 block tracking-normal"
            style={{ WebkitTextFillColor: 'var(--color-muted)' }}
          >
            para uma transformação{' '}
            <span className="font-serif italic text-rose-nude">invisível.</span>
          </span>
        </h1>

        <div className="w-full flex flex-col items-center gap-4">
          <a
            id="cta-hero-agendar"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full max-w-xs sm:max-w-sm py-4 sm:py-5 bg-rose-nude text-espresso text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-cta active:scale-95 active:translate-y-0 block text-center touch-target flex items-center justify-center min-h-[3rem]"
          >
            <span className="relative z-10">Agendar Avaliação</span>
            <div className="absolute inset-0 rounded-sm ring-1 ring-rose-nude ring-offset-2 ring-offset-espresso opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <button
            type="button"
            onClick={() => scrollToSection('protocol')}
            className="text-muted text-[10px] uppercase tracking-widest hover:text-rose-nude transition-colors flex items-center gap-1 group touch-target px-4"
          >
            Conheça a metodologia{' '}
            <ChevronDown
              size={12}
              className="group-hover:translate-y-1 transition-transform"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
