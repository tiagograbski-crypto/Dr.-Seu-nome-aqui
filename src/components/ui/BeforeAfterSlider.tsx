import { useCallback, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title: string;
  desc: string;
  delay: number;
  /** Fine-tune crop alignment when antes/depois share the same frame (e.g. lips). */
  objectPosition?: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
  afterScale?: number;
}

function toTransformOrigin(position: string): string {
  return position.replace(/\bcenter\b/g, '50%');
}

const IMAGE_BASE =
  'absolute inset-0 h-full w-full object-cover pointer-events-none select-none';

export function BeforeAfterSlider({
  before,
  after,
  title,
  desc,
  delay,
  objectPosition = 'center center',
  beforeObjectPosition,
  afterObjectPosition,
  afterScale = 1,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const applyPosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const next = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));

    container.style.setProperty('--position', `${next}%`);
    setPosition(next);
  }, []);

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.preventDefault();
      isDraggingRef.current = true;
      setIsDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
      applyPosition(event.clientX);
    },
    [applyPosition],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current) return;
      applyPosition(event.clientX);
    },
    [applyPosition],
  );

  const handlePointerUp = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }, []);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    const container = containerRef.current;
    if (!container) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const next = Math.max(0, position - 5);
      container.style.setProperty('--position', `${next}%`);
      setPosition(next);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const next = Math.min(100, position + 5);
      container.style.setProperty('--position', `${next}%`);
      setPosition(next);
    }
  }, [position]);

  const beforePosition = beforeObjectPosition ?? objectPosition;
  const afterPosition = afterObjectPosition ?? objectPosition;
  const beforeStyle = { objectPosition: beforePosition };
  const afterStyle = {
    objectPosition: afterPosition,
    clipPath: 'inset(0 0 0 var(--position))',
    ...(afterScale !== 1 && {
      transform: `scale(${afterScale})`,
      transformOrigin: toTransformOrigin(afterPosition),
    }),
  };

  return (
    <div
      className="flex flex-col reveal-on-scroll group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        ref={containerRef}
        className={`relative w-full aspect-[3/4] sm:aspect-[4/5] max-h-[70vh] sm:max-h-none overflow-hidden bg-espresso rounded-sm border border-rose-nude/20 shadow-card mb-4 sm:mb-6 cursor-ew-resize touch-none select-none ${
          isDragging ? 'cursor-grabbing' : ''
        }`}
        style={{ '--position': `${position}%` } as React.CSSProperties}
        tabIndex={0}
        role="group"
        aria-label={`Comparativo antes e depois: ${title}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        {/* Shared frame: both images use identical size + crop anchor */}
        <img
          src={before}
          alt={`${title} — antes do tratamento`}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={`${IMAGE_BASE} ${isDragging ? '' : 'transition-[filter,opacity] duration-500 group-hover:opacity-100'}`}
          style={beforeStyle}
        />

        <img
          src={after}
          alt={`${title} — depois do tratamento`}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={`${IMAGE_BASE} ${isDragging ? '' : 'transition-[filter,opacity] duration-500 group-hover:opacity-100'}`}
          style={afterStyle}
        />

        <div
          className="absolute top-0 bottom-0 w-[2px] -ml-[1px] bg-rose-nude z-20 pointer-events-none will-change-[left]"
          style={{ left: 'var(--position)' }}
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-10 sm:h-10 bg-espresso/70 backdrop-blur-md border border-rose-nude rounded-full flex items-center justify-center text-rose-nude shadow-[0_4px_15px_rgba(0,0,0,0.6)]">
            <div className="flex items-center -space-x-1">
              <ChevronLeft size={14} aria-hidden="true" />
              <ChevronRight size={14} aria-hidden="true" />
            </div>
          </div>
        </div>

        <div
          className="absolute top-4 left-4 z-10 bg-espresso/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-rose-nude/20 shadow-lg pointer-events-none transition-opacity duration-200"
          style={{ opacity: position > 20 ? 1 : 0 }}
        >
          <span className="text-muted text-[10px] uppercase tracking-widest font-bold">Antes</span>
        </div>
        <div
          className="absolute top-4 right-4 z-10 bg-rose-nude/95 backdrop-blur-md px-3 py-1.5 rounded-sm border border-espresso/20 shadow-lg pointer-events-none transition-opacity duration-200"
          style={{ opacity: position < 80 ? 1 : 0 }}
        >
          <span className="text-pearl text-[10px] uppercase tracking-widest font-bold">Depois</span>
        </div>

        <p className="absolute bottom-4 left-0 right-0 text-center text-muted/80 text-[10px] uppercase tracking-widest pointer-events-none z-10">
          Arraste para comparar
        </p>
      </div>

      <div className="text-center px-4">
        <h4 className="text-pearl text-lg sm:text-xl font-light tracking-wide mb-2 sm:mb-3 font-serif group-hover:text-rose-nude transition-colors">
          {title}
        </h4>
        <p className="text-muted text-xs leading-relaxed opacity-90">{desc}</p>
      </div>
    </div>
  );
}
