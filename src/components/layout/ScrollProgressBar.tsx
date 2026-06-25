interface ScrollProgressBarProps {
  progress: number;
}

export function ScrollProgressBar({ progress }: ScrollProgressBarProps) {
  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-rose-nude z-50 transition-all duration-150 ease-out"
      style={{
        width: `${progress}%`,
        boxShadow: '0 0 10px rgba(213, 174, 174, 0.5)',
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progresso de leitura da página"
    />
  );
}
