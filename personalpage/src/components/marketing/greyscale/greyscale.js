import React, { useState } from 'react';

const GreyScaleImage = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      style={{
        filter: isHovered ? 'none' : 'grayscale(100%)',
        transition: 'filter 0.3s ease-in-out',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default GreyScaleImage;
