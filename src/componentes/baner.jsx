import React, { useState } from 'react';
import './estilo /banner.css';

function Banner() {
  const [showText, setShowText] = useState(true);

  function handleAnimationEnd() {
    setShowText(!showText);
  }

  return (
    <header className="banner">
      <div
        className={`banner__text ${showText ? 'banner__text--show' : ''}`}
        onAnimationEnd={handleAnimationEnd}
      >
      Developer website
      </div>
    </header>
  );
}

export default Banner;
