export function EmpathySection() {
  return (
    <section className="w-full bg-espresso section-pad-y section-shell" aria-labelledby="empathy-heading">
      <div className="max-w-xl mx-auto text-center reveal-on-scroll px-2">
        <p id="empathy-heading" className="text-pearl text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-balance">
          &ldquo;Você não precisa de mais um procedimento padronizado que altera a sua{' '}
          <span className="font-serif italic text-rose-nude">fisionomia natural.</span>&rdquo;
        </p>
        <p className="text-muted mt-6 text-sm md:text-base leading-relaxed">
          O que o seu rosto exige é uma arquitetura de tratamento que respeite a sua identidade e
          devolva o controle para as suas mãos.
        </p>
      </div>
    </section>
  );
}
