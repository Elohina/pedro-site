import React from "react";
import { IosSVG, AndroidSVG, ReactNativeSVG, AWSSVG } from './SVGIcons';

const Skills = () => (
  <div className="row skill">
    <div className="twelve columns">
      <h2>This is what I like to do</h2>
      <div className="row item">
        <div className="three columns">
          <div className="devicon-git-plain">
            <IosSVG />
          </div>
          <h2>iOS</h2>
        </div>
        <div className="three columns">
          <div className="devicon-git-plain">
            <AndroidSVG />
          </div>
          <h2>Android</h2>
        </div>
        <div className="three columns">
          <div className="devicon-git-plain">
            <ReactNativeSVG />
          </div>
          <h2>React Native</h2>
        </div>
        <div className="three columns">
          <div className="devicon-git-plain">
            <AWSSVG />
          </div>
          <h2>AWS</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
