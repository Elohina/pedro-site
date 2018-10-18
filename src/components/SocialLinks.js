import React from "react";
import {
  FaLinkedin,
  FaGithub
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.linkedin.com/in/pedrovaldi/" target="_blank" rel="noopener">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://github.com/Gringox" target="_blank" rel="noopener">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
