import React from "react";
import "../styles/seeMoreButton.css";
import Link from "next/link";

const SeeMoreButton = () => {
  return (
    <Link className="learn-more" href="/portfolio">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow" />
      </span>
      <span className="button-text">See More</span>
    </Link>
  );
};

export default SeeMoreButton;
