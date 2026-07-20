import { PROCEDURES } from '../../data/content';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { SectionHeading } from '../ui/SectionHeading';

const SECONDARY_PROCEDURES = PROCEDURES.slice(1);

export function PortfolioSection() {
  return (
    <section
      id="tratamentos"
      className="w-full bg-espresso section-pad-y section-shell border-t border-rose-nude/10 scroll-anchor"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          eyebrow="Portfólio"
          title="Outros Tratamentos"
          description="Resultados reais. Deslize para explorar o comparativo entre a fisionomia inicial e o resgate elegante da sua naturalidade."
        />

        {/* Mobile: carrossel horizontal */}
        <div
          className="md:hidden flex gap-6 overflow-x-auto no-scrollbar snap-scroll-x pb-2 -mx-1 px-1"
          aria-label="Tratamentos — deslize para ver mais"
        >
          {SECONDARY_PROCEDURES.map((proc, idx) => (
            <div key={proc.title} className="w-[min(88vw,340px)] shrink-0 snap-start">
              <BeforeAfterSlider
                before={proc.before}
                after={proc.after}
                title={proc.title}
                desc={proc.desc}
                delay={idx * 100}
                objectPosition={proc.objectPosition}
                beforeObjectPosition={proc.beforeObjectPosition}
                afterObjectPosition={proc.afterObjectPosition}
                beforeScale={proc.beforeScale}
                afterScale={proc.afterScale}
                beforeTransformOrigin={proc.beforeTransformOrigin}
                afterTransformOrigin={proc.afterTransformOrigin}
              />
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 sm:gap-10">
          {SECONDARY_PROCEDURES.map((proc, idx) => (
            <BeforeAfterSlider
              key={proc.title}
              before={proc.before}
              after={proc.after}
              title={proc.title}
              desc={proc.desc}
              delay={idx * 150}
              objectPosition={proc.objectPosition}
              beforeObjectPosition={proc.beforeObjectPosition}
              afterObjectPosition={proc.afterObjectPosition}
              beforeScale={proc.beforeScale}
              afterScale={proc.afterScale}
              beforeTransformOrigin={proc.beforeTransformOrigin}
              afterTransformOrigin={proc.afterTransformOrigin}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
