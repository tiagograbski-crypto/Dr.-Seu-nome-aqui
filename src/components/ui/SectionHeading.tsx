interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  shimmer?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  shimmer = false,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-10 sm:mb-12 md:mb-16 reveal-on-scroll px-2">
      <p className="text-rose-nude text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3 sm:mb-4">{eyebrow}</p>
      <h2
        className={`text-pearl text-xl sm:text-2xl md:text-4xl font-light tracking-wider mb-4 sm:mb-6 text-balance ${
          shimmer
            ? 'bg-clip-text text-transparent bg-gradient-to-r from-pearl via-rose-nude to-pearl bg-[length:200%_auto] animate-[shimmerText_8s_linear_infinite]'
            : ''
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="text-muted text-sm max-w-xl mx-auto leading-relaxed">{description}</p>
      )}
      {shimmer && (
        <div className="w-px h-12 bg-gradient-to-b from-rose-nude/50 to-transparent mx-auto mt-6" />
      )}
    </div>
  );
}
