import React from "react";
import {
  FaLinkedin,
  FaGithub
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <nav>
    <ul className="social">
      <li>
        <a href="https://www.linkedin.com/in/pedrovaldi/" target="_blank" rel="noopener" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/Gringox" target="_blank" rel="noopener" aria-label="Github">
          <FaGithub />
        </a>
      </li>
    </ul>
  </nav>
);

export default SocialLinks;
