import React from "react";
import { FaChevronCircleDown } from "react-icons/lib/fa";
import { FaChevronCircleUp } from "react-icons/lib/fa";

const ScrollUp = () => (
  <p className="scrolldown">
    <a className="see-more">See more</a>
    <a className="smoothscroll">
      <FaChevronCircleDown />
    </a>
  </p>
);

export default ScrollUp;
