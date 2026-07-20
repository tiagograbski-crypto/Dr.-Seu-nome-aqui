import { PROCEDURES } from '../../data/content';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { MobileScrollCarousel } from '../ui/MobileScrollCarousel';
import { SectionHeading } from '../ui/SectionHeading';

const SECONDARY_PROCEDURES = PROCEDURES.slice(1);

function renderProcedureSlider(proc: (typeof SECONDARY_PROCEDURES)[number], delay: number) {
  return (
    <BeforeAfterSlider
      before={proc.before}
      after={proc.after}
      title={proc.title}
      desc={proc.desc}
      delay={delay}
      objectPosition={proc.objectPosition}
      beforeObjectPosition={proc.beforeObjectPosition}
      afterObjectPosition={proc.afterObjectPosition}
      beforeScale={proc.beforeScale}
      afterScale={proc.afterScale}
      beforeTransformOrigin={proc.beforeTransformOrigin}
      afterTransformOrigin={proc.afterTransformOrigin}
    />
  );
}

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

        <MobileScrollCarousel
          ariaLabel="Tratamentos — deslize para ver mais"
          hintStorageKey="portfolio-carousel-hint-seen"
          items={SECONDARY_PROCEDURES.map((proc, idx) => ({
            id: proc.title.toLowerCase().replace(/\s+/g, '-'),
            label: proc.title,
            content: renderProcedureSlider(proc, idx * 100),
          }))}
        />

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
