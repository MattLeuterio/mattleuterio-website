import React from "react";
import PropTypes from "prop-types";

import {
  Contents,
  HeaderPanel,
  ImageWrapper,
  InfoWrapper,
  ProfileImg,
  Tecnology,
  Title
} from "./style";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { PanelContainer, PanelControls } from "../../../atoms";
import { Image } from "../../../atoms";
import ProfileImage from "../../../ui/assets/img/profile-1.jpg";
import Inter from "../../../ui/typography/inter";

const About = ({
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
      width={600}
      height={340}
      top={150}
      right={50}
    >
      <HeaderPanel theme={theme}>
        <PanelControls onClickClose={(e) => onClose(e)} />
      </HeaderPanel>
      <Contents theme={theme}>
        <ImageWrapper>
          <ProfileImg theme={theme}>
            <Image src={ProfileImage} width="160px" height="160px" />
          </ProfileImg>
        </ImageWrapper>
        <InfoWrapper>
          <Title>
            <Inter type="h1" configuration={{ fontSize: 28 }}><span>mattleuterio</span>.com</Inter>
            <Inter type="h3"><span>Version</span> 2.0</Inter>
          </Title>
          <Tecnology></Tecnology>
        </InfoWrapper>
      </Contents>
    </PanelContainer>
  );
};

About.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(About);
