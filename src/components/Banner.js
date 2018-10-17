import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="seven columns"></div>
    <div className="five columns banner-text headline-container">
      <h1 className="responsive-headline">I'm Pedro.</h1>
      <h3>
        Mobile developer
        {/* I'm a Dublin based <span>mobile developer</span> and <span>AWS expert</span> creating awesome
        and effective visual identities for companies of all sizes around the
        globe. Let's */}
        {/* <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>. */}
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
