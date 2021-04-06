import React from "react";
import PropTypes from "prop-types";

import { HeaderPanel, Title } from "./style";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { PanelContainer, PanelControls } from "../../../atoms";

const Profile = ({
  mediaIsPhone,
  onClickContainer,
  onClose,
  theme,
  active,
  dragConstraints,
}) => {
  return (
    <PanelContainer
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      theme={theme}
      width={585}
      height={610}
      top={100}
      left={50}
    >
      <HeaderPanel theme={theme}>
        <PanelControls onClickClose={(e) => onClose(e)} />
        <Title>Website Preferences</Title>
      </HeaderPanel>
    </PanelContainer>
  );
};

Profile.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Profile);
