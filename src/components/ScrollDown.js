import React from "react";
import { FaChevronCircleDown } from "react-icons/lib/fa";

const ScrollDown = () => (
  <p className="scrolldown">
    <a className="smoothscroll" href="#about" aria-label="See more about Pedro">
      <FaChevronCircleDown />
    </a>
  </p>
);

export default ScrollDown;
