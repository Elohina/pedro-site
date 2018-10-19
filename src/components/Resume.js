import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";

const Resume = () => (
  <ScrollableAnchor id={'resume'}>
    <section id="resume">
      {/* <Education />
      <Work /> */}
      <Skills />
    </section>
  </ScrollableAnchor>
);

export default Resume;
