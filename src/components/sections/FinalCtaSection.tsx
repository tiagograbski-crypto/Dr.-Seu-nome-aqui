import { WHATSAPP_LINK } from '../../config/site';

export function FinalCtaSection() {
  return (
    <section
      id="oferta-final"
      className="w-full bg-rose-nude py-20 sm:py-28 md:py-32 section-shell shadow-[inset_0_20px_50px_rgba(0,0,0,0.3)]"
      aria-labelledby="final-cta-heading"
    >
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center reveal-on-scroll">
        <h2
          id="final-cta-heading"
          className="text-espresso text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-8 sm:mb-10 text-balance"
        >
          Eleve o padrão do seu visual hoje.
        </h2>

        <a
          id="cta-footer-agendar"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full max-w-xs py-5 bg-espresso text-rose-nude text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(26,23,23,0.4)] active:scale-95 active:translate-y-0 block touch-target flex items-center justify-center"
        >
          Falar com a Equipe
        </a>
        <p className="text-espresso/70 font-medium text-[10px] tracking-widest uppercase mt-6">
          Agendamentos sujeitos a disponibilidade de agenda.
        </p>
      </div>
    </section>
  );
}
