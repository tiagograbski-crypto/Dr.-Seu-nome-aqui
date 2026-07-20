import { REVIEWS } from '../../data/content';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { GoogleLogo, GoogleReviewCard } from '../ui/GoogleReviewCard';
import { MobileScrollCarousel } from '../ui/MobileScrollCarousel';

function reviewSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

export function ReviewsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="reviews"
      className="w-full bg-espresso section-pad-y overflow-hidden border-b border-rose-nude/10"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto section-shell mb-8 sm:mb-10 reveal-on-scroll">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-2">
            <GoogleLogo className="w-5 h-5" />
            <p className="text-[#70757a] text-xs font-medium tracking-wide">Avaliações no Google</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-pearl text-3xl sm:text-4xl font-light tabular-nums">5,0</span>
            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-0.5 text-[#FBBC04]" role="img" aria-label="5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted text-[11px]">{REVIEWS.length} avaliações</p>
            </div>
          </div>

          <h2 id="reviews-heading" className="text-pearl text-xl sm:text-2xl font-light tracking-wide text-balance">
            O que nossas clientes dizem no Google
          </h2>
        </div>
      </div>

      <div className="section-shell">
        <MobileScrollCarousel
          ariaLabel="Avaliações no Google — deslize para ver mais"
          hintStorageKey="reviews-carousel-hint-seen"
          slideClassName="w-[min(88vw,320px)] shrink-0 snap-start"
          trackClassName="flex gap-3 overflow-x-auto no-scrollbar snap-scroll-x pb-2 -mx-1 px-1"
          items={REVIEWS.map((review) => ({
            id: reviewSlug(review.name),
            label: review.name.split(' ')[0] ?? review.name,
            content: <GoogleReviewCard review={review} className="w-full" />,
          }))}
        />
      </div>

      <div
        className={`hidden md:flex relative overflow-x-hidden group ${reducedMotion ? 'flex-wrap justify-center gap-4 px-6' : ''}`}
        aria-label="Avaliações no Google"
      >
        {(reducedMotion ? [0] : [0, 1]).map((wrapperIdx) => (
          <div
            key={wrapperIdx}
            className={`flex shrink-0 ${reducedMotion ? 'flex-wrap justify-center gap-4' : 'animate-marquee group-hover:[animation-play-state:paused]'}`}
            aria-hidden={wrapperIdx === 1}
          >
            {REVIEWS.map((review) => (
              <GoogleReviewCard
                key={`${wrapperIdx}-${review.name}`}
                review={review}
                className="w-[320px] lg:w-[340px] mx-3"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
