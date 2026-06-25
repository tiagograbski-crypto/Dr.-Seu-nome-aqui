import { SITE } from '../../config/site';

export function SpecialistSection() {
  const { doctor } = SITE;

  return (
    <section
      id="especialista"
      className="w-full bg-espresso section-pad-y section-shell border-t border-rose-nude/10 scroll-anchor"
      aria-labelledby="specialist-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center reveal-on-scroll">
        <div className="relative aspect-[4/5] w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none group">
          <div
            className="absolute inset-0 bg-rose-nude blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"
            aria-hidden="true"
          />

          <div className="relative w-full h-full rounded-sm overflow-hidden border border-rose-nude/20">
            <img
              src={doctor.image}
              alt={`${doctor.name}, ${doctor.title}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center filter grayscale blur-[1px] transition-all duration-1000 group-hover:grayscale-0 group-hover:blur-0 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80"
              aria-hidden="true"
            />
          </div>

          <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 lg:-right-10 bg-charcoal/90 border border-rose-nude/30 p-3 sm:p-4 md:p-6 rounded-sm shadow-2xl backdrop-blur-md transition-transform duration-700 group-hover:-translate-y-2">
            <p className="text-rose-nude text-xl sm:text-2xl md:text-3xl font-light mb-1">
              {doctor.experienceYears}
            </p>
            <p className="text-muted text-[9px] sm:text-[10px] uppercase tracking-widest">
              Anos de <br />
              Experiência
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="text-rose-nude text-[10px] uppercase tracking-[0.3em] mb-4">Direção Clínica</p>
          <h2
            id="specialist-heading"
            className="text-pearl text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-6 leading-tight text-balance"
          >
            A ciência exata por trás da naturalidade.
          </h2>

          <div className="space-y-5 sm:space-y-6 text-muted text-sm leading-relaxed">
            <p>
              Com formação avançada em anatomia da face e especialização nos protocolos mais
              modernos de injetáveis, a nossa diretora clínica atua com uma filosofia clara:{' '}
              <strong className="text-pearl">
                o melhor procedimento é aquele que ninguém percebe que foi feito.
              </strong>
            </p>
            <p>
              Especialista na aplicação de toxina botulínica (botox), bioestimuladores de colágeno e
              harmonização facial estratégica, o foco de cada atendimento não é padronizar traços,
              mas sim restaurar a arquitetura jovem do seu rosto de forma{' '}
              <span className="font-serif italic text-rose-nude">orgânica e elegante.</span>
            </p>
          </div>

          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-rose-nude/10">
            <p className="text-pearl font-medium tracking-wide">{doctor.name}</p>
            <p className="text-muted text-xs mt-1">{doctor.title}</p>
            <p className="text-rose-nude text-[10px] mt-1 tracking-widest">{doctor.crm}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
