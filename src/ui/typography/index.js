import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../theme";

export const TypefaceInterface = PropTypes.shape({
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontStyle: PropTypes.oneOf(["normal", "italic"]),
  fontWeight: PropTypes.oneOf([300, 400, 700]),
  fontStretch: PropTypes.oneOf(["normal", "condensed"]),
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  letterSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
});

const defaultConfig = {
  color: "unset",
  fontFamily: theme.fontset.inter,
  fontStyle: "normal",
  fontWeight: "normal",
  fontStretch: "normal",
  lineHeight: 1,
  letterSpacing: "unset",
  fontSize: 12,
  textAlign: "unset",
  textTransform: "unset",
};

const getTypefaceBaseStyle = (props) => `
  color: ${props.config.color || props.theme.colors.primary.black};
  font-family: ${props.config.fontFamily || props.theme.fontset.inter};
  font-size: ${props.config.fontSize}px;
  font-style: ${props.config.fontStyle};
  font-weight: ${props.config.fontWeight};
  font-stretch: ${props.config.fontStretch};
  letter-spacing: ${props.config.letterSpacing};
  line-height: ${props.config.lineHeight};
  text-align: ${props.config.textAlign};
  text-transform: ${props.config.textTransform};
  transition: all 250ms ease-in-out;
  width: 100%;
`;

export const TypefaceStyledDiv = styled.div`
  ${(props) => getTypefaceBaseStyle(props)};
`;

export const TypefaceStyledSpan = styled.span`
  ${(props) => getTypefaceBaseStyle(props)};
  width: unset;
`;

const Typeface = ({ configuration, children, htmlAttribute, onClick, className }) => {
  const config = { ...defaultConfig, ...configuration };
  if (htmlAttribute === "div") {
    return (
      <TypefaceStyledDiv className={className} config={config} onClick={onClick}>
        {children}
      </TypefaceStyledDiv>
    );
  }
  return (
    <TypefaceStyledSpan className={className} config={config} onClick={onClick}>
      {children}
    </TypefaceStyledSpan>
  );
};

Typeface.propTypes = {
  children: PropTypes.node,
  configuration: TypefaceInterface,
  htmlAttribute: PropTypes.oneOf(["div", "span"]),
  onClick: PropTypes.func,
};

Typeface.defaultProps = {
  htmlAttribute: "div",
};

export default Typeface;
