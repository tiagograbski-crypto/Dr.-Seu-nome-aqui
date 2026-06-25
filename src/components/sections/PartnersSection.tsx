import { PARTNERS } from '../../data/content';

export function PartnersSection() {
  return (
    <section className="w-full bg-espresso py-6 sm:py-8 border-b border-charcoal section-shell" aria-label="Parceiros e tecnologias">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16 reveal-on-scroll">
        {PARTNERS.map((partner) => (
          <div
            key={partner.name}
            className={`flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity min-w-[5.5rem] ${
              partner.hiddenOnMobile ? 'hidden sm:flex' : ''
            }`}
          >
            <span className="text-rose-nude text-[8px] uppercase tracking-[0.2em]">
              {partner.label}
            </span>
            <span className="text-pearl text-xs uppercase tracking-widest font-serif">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
