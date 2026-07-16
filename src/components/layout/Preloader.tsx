import { BrandMark } from '../ui/BrandMark';

interface PreloaderProps {
  isLoading: boolean;
  onSkip: () => void;
}

export function Preloader({ isLoading, onSkip }: PreloaderProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-espresso transition-all duration-700 ease-in-out ${
        isLoading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      role="status"
      aria-live="polite"
      aria-busy={isLoading}
      aria-label="Carregando página"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal via-espresso to-espresso animate-pulse" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-rose-nude to-transparent mb-6 opacity-50 animate-[pulse_1s_ease-in-out_infinite]" />
        <h1 className="tracking-[0.25em] uppercase text-sm font-light relative overflow-hidden group">
          <BrandMark
            className="relative z-10"
            prefixClassName="text-rose-nude font-medium"
            nameClassName="text-pearl font-light"
          />
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-rose-nude to-transparent opacity-30 group-hover:animate-[shimmer_1s_infinite]" />
        </h1>
        <button
          type="button"
          onClick={onSkip}
          className="mt-8 text-muted/70 text-[10px] uppercase tracking-widest hover:text-rose-nude transition-colors touch-target px-4"
          aria-label="Pular animação de abertura"
        >
          Pular
        </button>
      </div>
    </div>
  );
}
