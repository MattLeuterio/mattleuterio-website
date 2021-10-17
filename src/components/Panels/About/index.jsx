import React from "react";
import PropTypes from "prop-types";

import {
  Contents,
  HeaderPanel,
  ImageWrapper,
  InfoWrapper,
  ProfileImg,
  Row,
  Tecnology,
  Title,
} from "./style";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { PanelContainer, PanelControls } from "../../../atoms";
import { Image } from "../../../atoms";
import Logo from "../../../ui/assets/img/logo.png";
import Inter from "../../../ui/typography/inter";

const info = [
  { label: "Framework", value: "React" },
  { label: "Style", value: "Styled-components" },
  { label: "State container", value: "Redux" },
  { label: "Animation", value: "Framer-motion" },
  { label: "CMS", value: "Contentful" },
];

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
          <ProfileImg themeSelected={theme}>
            <Image src={Logo} width="160px" height="160px" />
          </ProfileImg>
        </ImageWrapper>
        <InfoWrapper>
          <Title>
            <Inter type="h1" configuration={{ fontSize: 24 }}>
              <span>mattleuterio</span>.com
            </Inter>
            <Inter type="h3">
              <span>Version</span> 2.0
            </Inter>
          </Title>
          <Tecnology>
            {info.map((item) => (
              <Row>
                <Inter
                  htmlAttribute="span"
                  type="h3"
                  configuration={{ fontWeight: "bold" }}
                >
                  {item.label}
                </Inter>
                <Inter htmlAttribute="span" type="h3">
                  {item.value}
                </Inter>
              </Row>
            ))}
          </Tecnology>
        </InfoWrapper>
      </Contents>
    </PanelContainer>
  );
};

About.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(About);
