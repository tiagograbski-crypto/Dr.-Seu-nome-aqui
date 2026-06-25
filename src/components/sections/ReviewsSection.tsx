import { BadgeCheck, Star } from 'lucide-react';
import { REVIEWS } from '../../data/content';
import { useReducedMotion } from '../../hooks/useReducedMotion';

function ReviewCard({ review, className = '' }: { review: (typeof REVIEWS)[0]; className?: string }) {
  return (
    <article
      className={`bg-charcoal p-5 sm:p-6 rounded-sm border border-rose-nude/10 shrink-0 transition-transform duration-500 hover:-translate-y-2 hover:bg-elevated ${className}`}
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-4">
        <div
          className="w-10 h-10 rounded-full bg-rose-nude/20 flex items-center justify-center text-rose-nude font-bold text-sm shrink-0"
          aria-hidden="true"
        >
          {review.name.charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="text-pearl text-sm font-medium truncate">{review.name}</h3>
            <BadgeCheck size={14} className="text-rose-nude shrink-0" aria-hidden="true" />
          </div>
          <p className="text-muted/70 text-[10px] truncate">
            {review.time} • <span className="text-rose-nude">Paciente Verificada</span>
          </p>
        </div>
      </div>
      <div className="flex mb-4 gap-1" role="img" aria-label="5 estrelas">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-rose-nude fill-rose-nude" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="text-muted text-xs leading-relaxed italic">
        &ldquo;{review.text}&rdquo;
      </blockquote>
    </article>
  );
}

export function ReviewsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      className="w-full bg-espresso section-pad-y overflow-hidden border-b border-rose-nude/10"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto section-shell mb-8 sm:mb-12 text-center reveal-on-scroll">
        <p className="text-rose-nude text-[10px] uppercase tracking-[0.3em] mb-4">Experiência Real</p>
        <h2 id="reviews-heading" className="text-pearl text-xl sm:text-2xl font-light tracking-wide text-balance">
          O que dizem nossas clientes
        </h2>
      </div>

      {/* Mobile & tablet: swipeable cards */}
      <div
        className="md:hidden section-shell flex gap-4 overflow-x-auto no-scrollbar snap-scroll-x pb-2 -mx-0"
        aria-label="Depoimentos de pacientes — deslize para ver mais"
      >
        {REVIEWS.map((review) => (
          <ReviewCard key={review.name} review={review} className="w-[min(85vw,300px)] snap-start" />
        ))}
      </div>

      {/* Desktop: infinite marquee */}
      <div
        className={`hidden md:flex relative overflow-x-hidden group ${reducedMotion ? 'flex-wrap justify-center gap-4 px-6' : ''}`}
        aria-label="Depoimentos de pacientes"
      >
        {(reducedMotion ? [0] : [0, 1]).map((wrapperIdx) => (
          <div
            key={wrapperIdx}
            className={`flex shrink-0 ${reducedMotion ? 'flex-wrap justify-center gap-4' : 'animate-marquee group-hover:[animation-play-state:paused]'}`}
            aria-hidden={wrapperIdx === 1}
          >
            {REVIEWS.map((review) => (
              <ReviewCard
                key={`${wrapperIdx}-${review.name}`}
                review={review}
                className="w-[300px] lg:w-[350px] mx-4"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
