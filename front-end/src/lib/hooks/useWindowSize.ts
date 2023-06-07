import { useEffect, useState } from 'react';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width:
      typeof window === 'undefined' ? 462 : window.innerWidth > 480 ? 462 : 270,
    height:
      (typeof window === 'undefined'
        ? 462
        : (window.innerHeight > 480
        ? 462
        : 270)) *
      (9 / 16),
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize((prev) => {
          return {
            width: window.innerWidth > 480 ? 462 : 270,
            height: prev.width || 0 * (9 / 16),
          };
        });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return { windowSize };
};
