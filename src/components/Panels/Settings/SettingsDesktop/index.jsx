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
  Background,
} from "./style";
import { withMediaQueries } from "../../../../hoc/withMediaQueries";
import { PanelContainer, HeaderPanel } from "../../../../atoms";
import { backgroundChoice } from "../../../../utils";

const SettingsDesktop = ({
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
          <Label>Theme</Label>
          <Content>
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
          <Content>
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
                  />
                )
            )}
          </BgsContainer>
        </Section>
      </Contents>
    </PanelContainer>
  );
};

SettingsDesktop.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(SettingsDesktop);
