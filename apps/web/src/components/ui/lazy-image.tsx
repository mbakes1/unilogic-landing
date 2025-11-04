import React, { useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  style?: React.CSSProperties;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  placeholder,
  style
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
      style={{ 
        maxWidth: '100%', 
        height: 'auto',
        display: 'block',
        ...style
      }}
    />
  );
};

export default LazyImage;