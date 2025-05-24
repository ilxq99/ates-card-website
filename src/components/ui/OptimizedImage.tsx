import { useState, useCallback } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  fallbackSrc,
}: OptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = useCallback(() => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  }, [fallbackSrc, imgSrc]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        loading="lazy"
      />
    </div>
  );
};

export default OptimizedImage;
