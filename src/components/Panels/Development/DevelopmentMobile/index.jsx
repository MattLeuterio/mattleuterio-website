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
import { Image, PanelContainer } from "../../../../atoms";
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
  actions: {onClickContainer, onClose, theme, active, dragConstraints}
}) => {
  const devContentType = useSelector(selectDevelopmentContentType);
  const [listProjects, setListProjects] = useState([]);
  const [typeContents, setTypeContents] = useState("");
  const [content, setContent] = useState({});

  useEffect(() => {
    getContent("development", setListProjects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTypeContents(devContentType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [devContentType]);

  const handleOnSetContents = (proj) => {
    setContent(proj);
  };

  const handleOnClosePanelContent = () => {
    setTypeContents("");
    setContent({});
  };

  return (
    <PanelContainer
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      theme={theme}
      widthPan={900}
      heightPan={650}
      top={50}
      right={150}
      noBackground
      display="block"
    >
      <Main>
        <LeftContainer>
          <Image src={VscDocumentIcon} width="24px" />
        </LeftContainer>
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
      <FooterPanel>
        <Image src={VscInfoFooter} width="200px" />
      </FooterPanel>
    </PanelContainer>
  );
};

DevelopmentMobile.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(DevelopmentMobile);
