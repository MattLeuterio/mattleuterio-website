import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../../atoms";
import { Container, IconApp } from "./style";
import { withMediaQueries } from "../../../hoc/withMediaQueries";

const Settings = ({
  mediaIsPhone,
  onClickThemeToggle,
  onClickContainer,
  theme,
  active,
  open,
}) => {
  return (
    <Container onClick={() => onClickContainer()} active={active} theme={theme}>
      <div onClick={onClickThemeToggle}>theme toggle</div>
    </Container>
  );
};

Settings.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Settings);
