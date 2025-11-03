import React, { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  placeholder 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder || src);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setHasLoaded(true);
    };
  }, [src]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}
      width={width}
      height={height}
      loading="lazy"
    />
  );
};

export default LazyImage;