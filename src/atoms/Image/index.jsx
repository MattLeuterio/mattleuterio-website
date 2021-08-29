import React from "react";
import PropTypes from "prop-types";
import { ImageWrapper, Img } from "./style";

const Image = ({ src, onClick, width, height, alt }) => {
  return (
    <ImageWrapper onClick={onClick} width={width} height={height}>
      <Img src={src} alt={alt} />
    </ImageWrapper>
  );
};

Image.defaultProps = {
  width: "100px",
};

Image.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
