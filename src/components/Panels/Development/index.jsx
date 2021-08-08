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
} from "./style";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { Image, PanelContainer, PanelControls } from "../../../atoms";
import {
  ChevronForwardOutline as IconArrow,
  ShareSocial as IconSocials,
  Layers as IconSkills,
} from "react-ionicons";
import VscDocumentIcon from "../../../ui/assets/img/vsc-document.png";
import VscInfoFooter from "../../../ui/assets/img/vsc-info-footer.png";
import { getContent } from "../../../contentful";

const Profile = ({
  mediaIsPhone,
  onClickContainer,
  onClose,
  theme,
  active,
  dragConstraints,
}) => {
  const [project, setProject] = useState();
  const [listProjects, setListProjects] = useState([]);
  const [openFolder, setOpenFolder] = useState(false);
  const [openFolderImages, setOpenFolderImages] = useState(false);
  const [contents, setContents] = useState({});

  useEffect(() => {
    getContent("development", setListProjects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnSetContents = () => {};

  console.log("listProjects", listProjects);

  return (
    <PanelContainer
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      theme={theme}
      width={1000}
      height={700}
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
                  <File>
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
        <Contents></Contents>
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
