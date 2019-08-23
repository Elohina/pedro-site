import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";
import ScrollableAnchor from "react-scrollable-anchor";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
    <section id="about">
      <div className="row">
        {/* <div className="three columns">
          <img className="profile-pic" src={profilePic} alt="" />
        </div> */}
        <h2>About Me</h2>
        <p>
        I'm very interested in opportunities to develop something using Big Data/Data
        Science technologies since I made my thesis in the area. I’m also interested
        in developing mobile apps (mainly native iOS). I have strong knowledge of the
        three main based Linux distros: Debian, Red Hat and Slackware. I have good
        knowledge working with web technologies and several web frameworks. I consider
        myself very passionate about my job and I’m always looking for opportunities
        to learn new things and to be a better professional.
        </p>
        <a href="https://s3.amazonaws.com/pedrovaldivieso.com/Pedro+Valdivieso+-+Curriculum+vitae.pdf"
           className="button"
           target="_blank"
           rel="noopener">
          <FaCloudDownload /> Download Resume
        </a>
      </div>
    </section>
);

export default About;
