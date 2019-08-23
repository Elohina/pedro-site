import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { siteMetadata } from "../../gatsby-config";
import favicon from "../assets/images/favicon.png";
import headerImage from "../assets/images/header-background.png";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="author" description={siteMetadata.author} />
      <meta name="description" description={siteMetadata.description} />
      <link rel="preload" href={headerImage} as="image"/>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway" rel="stylesheet"></link>
      <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
      <title>{siteMetadata.title}</title>
      {/* <link rel="icon" href="../assets/favicon.png" type="image/x-icon"/> */}
      {/* <link rel="preload" href="../assets/images/header-background.png" as="image" /> */}
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
