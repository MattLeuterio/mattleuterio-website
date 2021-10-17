import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  HeaderPanel,
  Title,
  SidebarContainer,
  Main,
  Contents,
  MenuSections,
  TitleMenu,
  LeftContainer,
  FooterPanel,
  ProjectFolder,
  HeaderFolder,
  TitleProject,
  Files,
  File,
  TitleFile,
  FolderImages,
  HeaderFolderImages,
  FileImage,
  NoPanel,
} from "./style";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { Image, PanelContainer, PanelControls } from "../../../atoms";
import { DevelopmentContent } from "../../../components";
import {
  ChevronForwardOutline as IconArrow,
  ShareSocial as IconSocials,
  Layers as IconSkills,
} from "react-ionicons";
import VscDocumentIcon from "../../../ui/assets/img/vsc-document.png";
import VscNoPanel from "../../../ui/assets/img/vsc-nopanel.svg";
import VscInfoFooter from "../../../ui/assets/img/vsc-info-footer.png";
import { getContent } from "../../../contentful";
import Inter from "../../../ui/typography/inter";

const Profile = ({
  mediaIsPhone,
  onClickContainer,
  onClose,
  theme,
  active,
  dragConstraints,
}) => {
  const [listProjects, setListProjects] = useState([]);
  const [openFolder, setOpenFolder] = useState(false);
  const [openFolderImages, setOpenFolderImages] = useState(false);
  const [typeContents, setTypeContents] = useState("");
  const [content, setContent] = useState({});

  useEffect(() => {
    getContent("development", setListProjects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnSetContents = (type, proj) => {
    setTypeContents(type);
    setContent(proj);
  };

  const handleOnClosePanelContent = () => {
    setTypeContents("");
    setContent({});
  };

  console.log("listProjects", listProjects);

  return (
    <PanelContainer
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      theme={theme}
      width={900}
      height={650}
      top={50}
      right={150}
      noBackground
      display="block"
    >
      <HeaderPanel theme={theme}>
        <PanelControls onClickClose={(e) => onClose(e)} />
        <Title>Development</Title>
      </HeaderPanel>
      <Main>
        <LeftContainer>
          <Image src={VscDocumentIcon} width="24px" />
        </LeftContainer>
        <SidebarContainer>
          <TitleMenu>EXPLORER</TitleMenu>
          <MenuSections>
            {listProjects.map((proj) => (
              <ProjectFolder>
                <HeaderFolder
                  openProjFolder={openFolder}
                  onClick={() => setOpenFolder(!openFolder)}
                >
                  <IconArrow height="16px" width="16px" color="#CCCCCC" />
                  <TitleProject>{proj?.fields?.title}</TitleProject>
                </HeaderFolder>
                <Files openProjFolder={openFolder}>
                  <File
                    selected={typeContents === "package.json"}
                    onClick={() =>
                      handleOnSetContents("package.json", proj?.fields)
                    }
                  >
                    <IconSocials height="16px" width="16px" color="#CCCCCC" />
                    <TitleFile>package.json</TitleFile>
                  </File>
                  <File>
                    <IconSkills height="16px" width="16px" color="#CCCCCC" />
                    <TitleFile>README.md</TitleFile>
                  </File>
                  {proj?.fields?.images.length > 0 && (
                    <>
                      <HeaderFolderImages
                        openProjFolder={openFolderImages}
                        onClick={() => setOpenFolderImages(!openFolderImages)}
                      >
                        <IconArrow
                          className="icon-arrow"
                          height="16px"
                          width="16px"
                          color="#CCCCCC"
                        />
                        <IconSkills
                          className="icon-folder"
                          height="16px"
                          width="16px"
                          color="#CCCCCC"
                        />
                        <TitleFile>Images</TitleFile>
                      </HeaderFolderImages>
                      <FolderImages openProjFolder={openFolderImages}>
                        {proj?.fields?.images.map((img) => (
                          <FileImage>
                            <IconSkills
                              className="icon-folder"
                              height="16px"
                              width="16px"
                              color="#CCCCCC"
                            />
                            <TitleFile>{img.fields?.title}</TitleFile>
                          </FileImage>
                        ))}
                      </FolderImages>
                    </>
                  )}
                </Files>
              </ProjectFolder>
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

Profile.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Profile);
