import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/content';

export function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const baseId = useId();

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-espresso section-pad-y section-shell scroll-anchor"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-2xl mx-auto reveal-on-scroll">
        <h2
          id="faq-heading"
          className="text-muted text-xs uppercase tracking-[0.2em] mb-12 text-center"
        >
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4" role="list">
          {FAQ_ITEMS.map((faq, index) => {
            const panelId = `${baseId}-faq-panel-${index}`;
            const triggerId = `${baseId}-faq-trigger-${index}`;
            const isOpen = activeFaq === index;

            return (
              <div
                key={faq.q}
                className="bg-charcoal rounded-sm border border-rose-nude/10 overflow-hidden"
                role="listitem"
              >
                <button
                  id={triggerId}
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center gap-3 sm:gap-4 p-4 sm:p-6 text-left transition-colors hover:bg-white/[0.02] touch-target min-h-[3.5rem]"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-pearl text-xs sm:text-sm tracking-wide text-left text-balance pr-2">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-muted shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-muted text-xs leading-relaxed opacity-80">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
