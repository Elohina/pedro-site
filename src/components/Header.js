import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";

const Header = () => (
  <ScrollableAnchor id={'home'}>
    <header id="home">
      <Navigation />
      <Banner />
      <ScrollDown />
    </header>
  </ScrollableAnchor>
);

export default Header;
