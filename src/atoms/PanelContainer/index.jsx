import React from "react";
import PropTypes from "prop-types";
import { Container } from "./style";
import { motion } from "framer-motion";
import {withMediaQueries} from "../../hoc/withMediaQueries";

const PanelContainer = ({
  onClickPanelContainer,
  children,
  active,
  theme,
  widthPan,
  heightPan,
  top,
  right,
  bottom,
  left,
  dragConstraintsRef,
  noBackground,
  display,
  flexDirection,
  mediaIsTablet,
  mediaIsPhone
}) => {
  return (
    <Container
      as={motion.div}
      drag={!mediaIsPhone && !mediaIsTablet}
      dragConstraints={dragConstraintsRef}
      dragElastic={0}
      dragMomentum={false}
      onClick={() => onClickPanelContainer()}
      active={active}
      theme={theme}
      widthPan={widthPan}
      heightPan={heightPan}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      noBackground={noBackground}
      display={display}
      flexDirection={flexDirection}
      isIOS={mediaIsTablet || mediaIsPhone}
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

export default withMediaQueries(PanelContainer);
