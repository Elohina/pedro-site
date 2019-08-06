import React from "react";
import SocialLinks from "./SocialLinks";
import image from "../assets/images/header-background.png";

const Banner = () => (
  <div className="row banner">
    <div className="six columns headline-image">
      <img src={image} alt="Photo of Pedro"/>
    </div>
    <div className="six columns banner-text headline-container">
      <h1 className="responsive-headline">Hi, I'm Pedro.</h1>
      <h2>Mobile developer</h2>
      <h2>AWS expert</h2>
      <h2>Big Data enthusiast</h2>
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
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
