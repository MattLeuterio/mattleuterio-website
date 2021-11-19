import React from "react";
import PropTypes from "prop-types";
import { Container, Title } from "./style";
import { PanelControls } from "../";
import { withMediaQueries } from "../../hoc/withMediaQueries";

const HeaderPanel = ({
  onClickClose, theme = '', title = '', mediaIsPhone, hasColors = false,
  mediaIsTablet, color = '#E7E7E7', background = '#1C1C1E'
}) => {

  return (
    <Container hasColors={hasColors} theme={theme} color={color} background={background}>
      {(!mediaIsPhone && !mediaIsTablet) && (
        <>
          {title !== 'Profile' && <PanelControls onClickClose={onClickClose} />}
          <Title>{title}</Title>
        </>
      )}
    </Container>
  );
};

HeaderPanel.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  theme: PropTypes.string
};

export default withMediaQueries(HeaderPanel);
