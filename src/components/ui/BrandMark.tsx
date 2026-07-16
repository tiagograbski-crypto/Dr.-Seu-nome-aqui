import { SITE } from '../../config/site';

interface BrandMarkProps {
  className?: string;
  prefixClassName?: string;
  nameClassName?: string;
}

export function BrandMark({
  className = '',
  prefixClassName = 'text-rose-nude',
  nameClassName = 'text-inherit',
}: BrandMarkProps) {
  const { prefix, fantasyName } = SITE.brand;

  return (
    <span className={className}>
      <span className={prefixClassName}>{prefix}</span>{' '}
      <span className={nameClassName}>{fantasyName}</span>
    </span>
  );
}
