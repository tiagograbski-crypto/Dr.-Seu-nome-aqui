import { PROTOCOL_PILLARS } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';

export function ProtocolSection() {
  return (
    <section
      id="protocol"
      className="w-full bg-espresso section-pad-y section-shell scroll-anchor"
      aria-labelledby="protocol-heading"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="A Clínica" title="PROTOCOL" shimmer />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {PROTOCOL_PILLARS.map((item, idx) => (
            <article
              key={item.title}
              className="bg-charcoal p-6 sm:p-8 rounded-sm border border-rose-nude/10 hover:border-rose-nude/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated reveal-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <item.icon size={20} className="text-rose-nude mb-6" aria-hidden="true" />
              <h3 className="text-pearl text-sm uppercase tracking-wider mb-3">{item.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
