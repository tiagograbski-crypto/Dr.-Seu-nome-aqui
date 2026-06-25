import { useCallback, useEffect, useState } from 'react';
import { SITE } from '../config/site';

interface UsePreloaderResult {
  isLoading: boolean;
  skip: () => void;
}

export function usePreloader(): UsePreloaderResult {
  const [isLoading, setIsLoading] = useState(true);

  const skip = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), SITE.preloaderDurationMs);
    return () => clearTimeout(timer);
  }, []);

  return { isLoading, skip };
}
