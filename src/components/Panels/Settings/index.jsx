import React, { useState } from "react";
import PropTypes from "prop-types";
import { Image } from "../../../atoms";
import {
  Container,
  Contents,
  HeaderPanel,
  Title,
  PanelControls,
  PanelControl,
  Section,
  Label,
  Content,
  ChoiceTheme,
  NameInput,
  BgsContainer,
  Background,
} from "./style";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { CloseOutline, ArrowForwardCircleOutline } from "react-ionicons";
import {
  BgBeachDark,
  BgCloudsDark,
  BgDaylightDark,
  BgRocksDark,
  BgBeachLight,
  BgCloudsLight,
  BgDaylightLight,
  BgRocksLight,
} from "../../../ui/assets/img/backgrounds";
import { backgroundChoice } from "../../../utils";

const initialClient = !!localStorage.getItem("clientName")
  ? localStorage.getItem("clientName")
  : "mate";

const Settings = ({
  mediaIsPhone,
  onClickContainer,
  onClickTheme,
  onKeyPressEnter,
  onChangeName,
  onChangeBackground,
  onClose,
  value,
  theme,
  active,
  bgSelected,
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
    <Container onClick={() => onClickContainer()} active={active} theme={theme}>
      <HeaderPanel theme={theme}>
        <PanelControls>
          <PanelControl type="close" onClick={(e) => onClose(e)}>
            <CloseOutline color={"#3D3D3D"} height="12px" width="12px" />
          </PanelControl>
          <PanelControl type="minimize"></PanelControl>
          <PanelControl type="expand"></PanelControl>
        </PanelControls>
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
    </Container>
  );
};

Settings.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Settings);
