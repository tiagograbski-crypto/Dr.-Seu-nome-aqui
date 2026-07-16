import { HelpCircle, Layers, ScanFace, User } from 'lucide-react';
import { NAV_ITEMS } from '../../data/content';
import { scrollToSection } from '../../hooks/useScrollReveal';

const NAV_ICONS = {
  protocol: Layers,
  portfolio: ScanFace,
  especialista: User,
  faq: HelpCircle,
} as const;

export function MobileBottomNav() {
  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-espresso/95 backdrop-blur-xl border-t border-rose-nude/15 safe-bottom"
      aria-label="Navegação principal mobile"
    >
      <div className="grid grid-cols-4">
        {NAV_ITEMS.map((item) => {
          const Icon = NAV_ICONS[item.id as keyof typeof NAV_ICONS];

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="flex flex-col items-center justify-center gap-0.5 py-2 px-1 text-muted hover:text-rose-nude active:text-rose-nude transition-colors touch-target min-h-[3.25rem]"
            >
              <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
              <span className="text-[9px] uppercase tracking-wider leading-tight text-center truncate max-w-full">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
