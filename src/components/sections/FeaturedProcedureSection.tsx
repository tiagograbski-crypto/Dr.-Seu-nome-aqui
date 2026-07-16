import { PROCEDURES } from '../../data/content';
import { WHATSAPP_LINK } from '../../config/site';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';

export function FeaturedProcedureSection() {
  const featured = PROCEDURES[0];

  return (
    <section
      id="portfolio"
      className="w-full bg-espresso section-pad-y section-shell border-t border-rose-nude/10 scroll-anchor"
      aria-labelledby="featured-procedure-heading"
    >
      <div className="max-w-lg mx-auto reveal-on-scroll">
        <p className="text-rose-nude text-[10px] uppercase tracking-[0.3em] mb-4 text-center">
          Prova imediata
        </p>
        <h2
          id="featured-procedure-heading"
          className="text-pearl text-xl sm:text-2xl font-light tracking-wide text-center text-balance mb-2"
        >
          {featured.title}
        </h2>
        <p className="text-muted text-xs sm:text-sm text-center leading-relaxed mb-8 max-w-md mx-auto">
          O tratamento com maior conversão. Deslize e veja a naturalidade do resultado.
        </p>

        <BeforeAfterSlider
          before={featured.before}
          after={featured.after}
          title={featured.title}
          desc={featured.desc}
          delay={0}
        />

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full max-w-xs mx-auto flex items-center justify-center py-4 bg-rose-nude text-espresso text-[11px] font-bold uppercase tracking-[0.15em] rounded-sm shadow-cta hover:-translate-y-0.5 active:scale-95 transition-all duration-500 touch-target min-h-[3rem]"
        >
          Quero esse resultado
        </a>
      </div>
    </section>
  );
}
