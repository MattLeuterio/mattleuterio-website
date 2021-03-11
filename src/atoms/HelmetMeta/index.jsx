import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import Thumb from "../../ui/assets/img/thumbnail.jpg";

const HelmetMeta = ({ titlePage, path, description, image }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{titlePage}</title>
      <link rel="canonical" href={`http://justgames.com${path}`} />
      <meta name="description" content={description} />
      <meta property="og:title" content={titlePage} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image ? image : Thumb} />
      <meta property="og:url" content={`http://justgames.com${path}`}></meta>
    </Helmet>
  );
};

HelmetMeta.propTypes = {
  titlePage: PropTypes.string,
  path: PropTypes.string,
};

export default HelmetMeta;
