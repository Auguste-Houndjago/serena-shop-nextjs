// icon composant.js
'use client'

import React, { useEffect, useRef } from 'react';

const LordIcon = ({
  src = "https://cdn.lordicon.com/eiekfffz.json",
  trigger = "hover",
  size = "250px",
  stroke = "bold",
  colors = "primary:#121331,secondary:#ebe6ef,tertiary:#7166ee",
  style = { width: "250px", height: "250px" }
}) => {
  const iconRef = useRef(null);

  useEffect(() => {
    import('@lordicon/element').then(({ defineElement, loadAnimation }) => {
      defineElement(loadAnimation);
    });
  }, []);

  return (
    <lord-icon
      ref={iconRef}
      src={src}
      trigger={trigger}
      stroke={stroke}
      colors={colors}
      style={{ ...style, width: size, height: size }}
    />
  );
};

export default LordIcon;
