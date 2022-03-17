import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  SidebarContainer,
  Main,
  Contents,
  MenuSections,
  TitleMenu,
  LeftContainer,
  FooterPanel,
  NoPanel
} from "./style";
import { withMediaQueries } from "../../../../hoc/withMediaQueries";
import {ClosePanelMobile, Image, PanelContainer} from "../../../../atoms";
import { DevelopmentContent } from "../../../";
import VscDocumentIcon from "../../../../ui/assets/img/vsc-document.png";
import VscNoPanel from "../../../../ui/assets/img/vsc-nopanel.svg";
import VscInfoFooter from "../../../../ui/assets/img/vsc-info-footer.png";
import { getContent } from "../../../../contentful";
import Inter from "../../../../ui/typography/inter";
import Project from "../../../Project";
import { useSelector } from "react-redux";
import { selectDevelopmentContentType } from "../../../../features/development/developmentSlice";

const DevelopmentMobile = ({
  actions: {
    onClickContainer,
    onClose,
    theme,
    active,
    dragConstraints,
    devContentType,
    listProjects,
    setListProjects,
    typeContents,
    setTypeContents,
    content,
    setContent,
    handleOnSetContents,
    handleOnClosePanelContent,
    open
  }
}) => {
  return (
    <PanelContainer
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      open={open}
      theme={theme}
      widthPan={900}
      heightPan={650}
      top={50}
      right={150}
      noBackground
      display="block"
    >
      <Main>
        <SidebarContainer>
          <TitleMenu>EXPLORER</TitleMenu>
          <MenuSections>
            {listProjects.map((proj) => (
              <Project
                key={proj.id}
                selected={proj.id === content.id} 
                project={proj}
                onClickSetContents={() => handleOnSetContents(proj)}
              />
            ))}
          </MenuSections>
        </SidebarContainer>
        <Contents>
          {Object.keys(content).length > 0 ? (
            <DevelopmentContent
              handleOnClose={handleOnClosePanelContent}
              type={typeContents}
              projContent={content}
            />
          ) : (
            <NoPanel>
              <Image src={VscNoPanel} width="250px" />
              <Inter type="vscNoPanelTitle">Welcome to Development Panel</Inter>
              <Inter type="vscNoPanelSubtitle">Select file from sidebar</Inter>
            </NoPanel>
          )}
        </Contents>
      </Main>
      {/* Close Panel */}
      <ClosePanelMobile
          theme={theme}
          appSelected='development'
      />
    </PanelContainer>
  );
};

DevelopmentMobile.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(DevelopmentMobile);
