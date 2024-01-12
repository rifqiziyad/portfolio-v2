import React from 'react';
import "../styles/hamburgerButton.css";

const HamburgerButton = () => {
  return (
    <div className="hamburger">
      <input className="checkbox" type="checkbox" />
      <svg fill="none" viewBox="0 0 50 50" height={50} width={50}>
        <path className="lineTop line" strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 11L44 11" />
        <path strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 24H43" className="lineMid line" />
        <path strokeLinecap="round" strokeWidth={4} stroke="black" d="M6 37H43" className="lineBottom line" />
      </svg>
    </div>

  );
};

export default HamburgerButton;