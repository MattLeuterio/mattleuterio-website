import React from "react";
import PropTypes from "prop-types";

import {
  Contents,
  ImageWrapper,
  InfoWrapper,
  ProfileImg,
  Row,
  Tecnology,
  Title,
} from "./style";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { PanelContainer, HeaderPanel } from "../../../atoms";
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
  open,
  dragConstraints,
}) => {
  return (
    <PanelContainer
      id="panel-about"
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      theme={theme}
      open={open}
      widthPan={600}
      heightPan={340}
      top={150}
      right={50}
    >
      <HeaderPanel theme={theme} onClickClose={(e) => onClose(e)} title="About" />
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
            {info.map((item, index) => (
              <Row key={index}>
                <Inter
                  key={index}
                  htmlAttribute="span"
                  type="h3"
                  configuration={{ fontWeight: 700 }}
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
