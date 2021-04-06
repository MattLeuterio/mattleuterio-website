import React from "react";
import PropTypes from "prop-types";

import {
  Contents,
  HeaderPanel,
  Title,
  Section,
  Label,
  Content,
  ChoiceTheme,
  NameInput,
  BgsContainer,
  Background,
} from "./style";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { PanelContainer, PanelControls } from "../../../atoms";
import { backgroundChoice } from "../../../utils";

const Settings = ({
  mediaIsPhone,
  onClickContainer,
  onClickTheme,
  onChangeName,
  onChangeBackground,
  onClose,
  value,
  theme,
  active,
  bgSelected,
  dragConstraints,
}) => {
  const bgsList = [
    {
      type: "dark",
      name: "rocks",
    },
    {
      type: "dark",
      name: "beach",
    },
    {
      type: "dark",
      name: "clouds",
    },
    {
      type: "dark",
      name: "daylight",
    },
    {
      type: "light",
      name: "rocks",
    },
    {
      type: "light",
      name: "beach",
    },
    {
      type: "light",
      name: "clouds",
    },
    {
      type: "light",
      name: "daylight",
    },
  ];
  return (
    // <motion.div
    //   drag
    //   dragConstraints={dragConstraints}
    //   dragElastic={0}
    //   dragMomentum={false}
    //   style={{
    //     position: "absolute",
    //     width: "675px",
    //     height: "381px",
    //     top: "150px",
    //     right: "50px",
    //   }}
    // >
    <PanelContainer
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      theme={theme}
      width={675}
      height={381}
      top={150}
      right={50}
    >
      <HeaderPanel theme={theme}>
        <PanelControls onClickClose={(e) => onClose(e)} />
        <Title>Website Preferences</Title>
      </HeaderPanel>
      <Contents theme={theme}>
        <Section>
          <Label>Theme</Label>
          <Content>
            <ChoiceTheme
              type="light"
              theme={theme}
              onClick={() => onClickTheme("light")}
            ></ChoiceTheme>
            <ChoiceTheme
              type="dark"
              theme={theme}
              onClick={() => onClickTheme("dark")}
            ></ChoiceTheme>
          </Content>
        </Section>
        <Section>
          <Label>Set name</Label>
          <Content>
            <NameInput
              theme={theme}
              type="text"
              value={value}
              maxLength="20"
              placeholder="Name"
              onChange={(e) => onChangeName(e.target.value)}
            />
            {/* <ArrowForwardCircleOutline
                onClick={(e) => onClickIconSetName(e)}
                theme={theme}
                width="22px"
                height="22px"
              /> */}
          </Content>
        </Section>
        <Section>
          <Label>Background</Label>
          <BgsContainer>
            {bgsList.map(
              (bgs) =>
                bgs.type === localStorage.getItem("theme") && (
                  <Background
                    key={bgs.name}
                    name={bgs.name}
                    theme={theme}
                    bgSelected={bgSelected}
                    bg={backgroundChoice(theme, bgs.name)}
                    onClick={() => onChangeBackground(bgs.name)}
                  ></Background>
                )
            )}
          </BgsContainer>
        </Section>
      </Contents>
    </PanelContainer>
    // </motion.div>
  );
};

Settings.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Settings);
