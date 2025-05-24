import { useState, useEffect, useCallback } from "react";

interface ScrollState {
  scrollY: number;
  isScrolled: boolean;
  scrollPercentage: number;
}

export const useScrollOptimized = (threshold = 50) => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    isScrolled: false,
    scrollPercentage: 0,
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage =
      documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0;

    setScrollState((prev) => {
      const newIsScrolled = currentScrollY > threshold;

      // Обновляем только если значения действительно изменились
      if (
        Math.abs(prev.scrollY - currentScrollY) > 5 ||
        prev.isScrolled !== newIsScrolled ||
        Math.abs(prev.scrollPercentage - scrollPercentage) > 1
      ) {
        return {
          scrollY: currentScrollY,
          isScrolled: newIsScrolled,
          scrollPercentage,
        };
      }
      return prev;
    });
  }, [threshold]);

  useEffect(() => {
    let ticking = false;

    const optimizedHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizedHandler, { passive: true });
    return () => window.removeEventListener("scroll", optimizedHandler);
  }, [handleScroll]);

  return scrollState;
};
