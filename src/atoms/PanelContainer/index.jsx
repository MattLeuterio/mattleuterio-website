import React from "react";
import PropTypes from "prop-types";
import { Container } from "./style";
import { motion } from "framer-motion";

const PanelContainer = ({
  onClickPanelContainer,
  children,
  active,
  theme,
  width,
  height,
  top,
  right,
  bottom,
  left,
  dragConstraintsRef,
}) => {
  return (
    <Container
      as={motion.div}
      drag
      dragConstraints={dragConstraintsRef}
      dragElastic={0}
      dragMomentum={false}
      onClick={() => onClickPanelContainer()}
      active={active}
      theme={theme}
      width={width}
      height={height}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {children}
    </Container>
  );
};

PanelContainer.propTypes = {
  onClickPanelContainer: PropTypes.func,
  active: PropTypes.bool,
  theme: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default PanelContainer;
