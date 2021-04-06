import React from "react";
import PropTypes from "prop-types";
import { Container, PanelControl } from "./style";
import { CloseOutline as IconClose } from "react-ionicons";

const PanelControls = ({ onClickClose }) => {
  return (
    <Container>
      <PanelControl type="close" onClick={(e) => onClickClose(e)}>
        <IconClose color={"#3D3D3D"} height="12px" width="12px" />
      </PanelControl>
      <PanelControl type="minimize"></PanelControl>
      <PanelControl type="expand"></PanelControl>
    </Container>
  );
};

PanelControls.propTypes = {
  onClick: PropTypes.func,
};

export default PanelControls;
