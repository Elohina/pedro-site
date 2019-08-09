import React from "react";
import { FaChevronCircleDown } from "react-icons/lib/fa";
import { FaChevronCircleUp } from "react-icons/lib/fa";

const Collapsible = ({
  onClick,
  isOpen
}) => (
  <p className="scrolldown">
    <a className="see-more" onClick={onClick}>{`See ${isOpen ? 'less' : 'more'}`}</a>
    <a className="smoothscroll" onClick={onClick}>
      { isOpen ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
    </a>
  </p>
);

export default Collapsible;
