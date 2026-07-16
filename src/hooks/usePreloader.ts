import { useCallback, useEffect, useState } from 'react';
import { SITE } from '../config/site';

const PRELOADER_KEY = 'clinica-preloader-seen';

interface UsePreloaderResult {
  isLoading: boolean;
  skip: () => void;
}

export function usePreloader(): UsePreloaderResult {
  const [isLoading, setIsLoading] = useState(() => {
    try {
      return sessionStorage.getItem(PRELOADER_KEY) !== '1';
    } catch {
      return true;
    }
  });

  const finish = useCallback(() => {
    setIsLoading(false);
    try {
      sessionStorage.setItem(PRELOADER_KEY, '1');
    } catch {
      /* private browsing */
    }
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    const timer = setTimeout(finish, SITE.preloaderDurationMs);
    return () => clearTimeout(timer);
  }, [isLoading, finish]);

  return { isLoading, skip: finish };
}
