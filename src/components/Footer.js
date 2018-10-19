import React from "react";
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/lib/fa";
import ScrollableAnchor from "react-scrollable-anchor";

const Footer = () => (
  <ScrollableAnchor id={'footer'}>
    <footer id="footer">
      <div className="row">
        <div className="twelve columns">
          <div className="">
            <h2>Pedro Luis Valdivieso</h2>
            <h3><a href="mailto:pedro.valdivieso@gmail.com">pedro.valdivieso@gmail.com</a></h3>
          </div>
          <SocialLinks />

          {/* <ul className="copyright">
            <li>&copy; Copyright 2018 CeeVee</li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
            <li>
              Developed in React ⚛️ by{" "}
              <a href="http://www.amanhimself.me">Aman Mittal</a>
            </li>
          </ul> */}
        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <FaChevronCircleUp />
          </a>
        </div>
      </div>
    </footer>
  </ScrollableAnchor>
);

export default Footer;
