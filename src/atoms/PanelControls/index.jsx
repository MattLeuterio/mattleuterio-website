import React from "react";
import PropTypes from "prop-types";
import { ImageWrapper, Img } from "./style";

const PanelControls = ({ src, onClick, width, alt }) => {
  return (
    <ImageWrapper onClick={onClick} width={width}>
      <Img src={src} alt={alt} />
    </ImageWrapper>
  );
};

PanelControls.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default PanelControls;
