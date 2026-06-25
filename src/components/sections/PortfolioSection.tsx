import { PROCEDURES } from '../../data/content';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { SectionHeading } from '../ui/SectionHeading';

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="w-full bg-espresso section-pad-y section-shell border-t border-rose-nude/10 scroll-anchor"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          eyebrow="Portfólio"
          title="Tratamentos de Assinatura"
          description="Resultados reais. Deslize para explorar o comparativo absoluto entre a fisionomia inicial e o resgate elegante da sua naturalidade."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {PROCEDURES.map((proc, idx) => (
            <BeforeAfterSlider
              key={proc.title}
              before={proc.before}
              after={proc.after}
              title={proc.title}
              desc={proc.desc}
              delay={idx * 150}
              objectPosition={proc.objectPosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
