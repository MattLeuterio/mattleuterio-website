import React from "react";
import PropTypes from "prop-types";

import {
  Contents,
  Section,
  Label,
  Content,
  ChoiceTheme,
  NameInput,
  BgsContainer,
  Background, BgWrapper, ProfileImg, InfoUser,
} from "./style";
import { withMediaQueries } from "../../../../hoc/withMediaQueries";
import {PanelContainer, HeaderPanel, Image, ClosePanelMobile} from "../../../../atoms";
import { backgroundChoice } from "../../../../utils";
import Logo from "../../../../ui/assets/img/logo.png";
import Inter from "../../../../ui/typography/inter";

const SettingsMobile = ({
  actions: {
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
    bgsList
  }
}) => {
  return (
    <PanelContainer
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      theme={theme}
      widthPan={675}
      heightPan={381}
      top={150}
      right={50}
    >
      <HeaderPanel theme={theme} onClickClose={(e) => onClose(e)} title="Preferences" />
      <Contents theme={theme}>
        <Section>
          <Content type="info" theme={theme}>
            <ProfileImg theme={theme}>
              <Image src={Logo} width="90px" height="90px" />
            </ProfileImg>
            <InfoUser>
              <Inter type="settingsInfoName">Matt Leuterio</Inter>
              <Inter>mattleuterio.dev</Inter>
            </InfoUser>
          </Content>
        </Section>
        <Section>
          <Label>Theme</Label>
          <Content type="choice-theme" theme={theme}>
            <ChoiceTheme
              type="light"
              theme={theme}
              onClick={() => onClickTheme("light")}
            />
            <ChoiceTheme
              type="dark"
              theme={theme}
              onClick={() => onClickTheme("dark")}
            />
          </Content>
        </Section>
        <Section>
          <Label>Set name</Label>
          <Content type="set-name" theme={theme}>
            <NameInput
              theme={theme}
              type="text"
              value={value}
              maxLength="20"
              placeholder="Name"
              onChange={(e) => onChangeName(e.target.value)}
            />
          </Content>
        </Section>
        <Section>
          <Label>Background</Label>
          <BgsContainer theme={theme}>
            <BgWrapper>
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
                          />
                      )
              )}
            </BgWrapper>
          </BgsContainer>
        </Section>
      </Contents>
      <ClosePanelMobile
          theme={theme}
          appSelected='settings'
      />
    </PanelContainer>
  );
};

SettingsMobile.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(SettingsMobile);
