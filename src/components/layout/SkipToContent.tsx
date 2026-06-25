interface SkipToContentProps {
  targetId?: string;
}

export function SkipToContent({ targetId = 'main-content' }: SkipToContentProps) {
  return (
    <a href={`#${targetId}`} className="skip-link">
      Ir para o conteúdo principal
    </a>
  );
}
