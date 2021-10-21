import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  HeaderPanel,
  Title,
  Main,
  HeaderFilmmaking,
  InfoVideo,
  MenuVideo,
  VideoContainer,
  MenuProject,
  InfoVideoContainer,
  Gears,
  Links,
  InfoTitle,
  InfoDescription,
  ExternalLinks,
  PlayerContainer,
  Overlay
} from "./style";
import { getContent } from "../../../contentful";
import ReactPlayer from 'react-player';
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { HamburgerMenu, Image, PanelContainer, PanelControls } from "../../../atoms";
import {
  ShareSocial as IconSocials,
  Layers as IconSkills,
} from "react-ionicons";
import LogoYoutubeDark from '../../../ui/assets/img/youtube-logo-dark.png';
import LogoYoutubeLight from '../../../ui/assets/img/youtube-logo-light.png';
import Inter from "../../../ui/typography/inter";

const Filmmaking = ({
  mediaIsPhone,
  onClickContainer,
  onClose,
  theme,
  active,
  dragConstraints,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [listProjects, setListProjects] = useState([]);
  const [videoSelected, setVideoSelected] = useState([]);

  useEffect(() => {
    getContent("filmmaking", setListProjects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setVideoSelected(listProjects[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listProjects]);

  const onClickMenuProject = (proj) => {
    setVideoSelected(proj);
    setToggleMenu(false);
  };

  console.log('listProjects', listProjects);
  console.log('videoSelected', videoSelected);

  return (
    <PanelContainer
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      theme={theme}
      width={950}
      height={650}
      top={50}
      left={150}
      noBackground
      display="flex"
      flexDirection="column"
    >
      <HeaderPanel theme={theme}>
        <PanelControls onClickClose={(e) => onClose(e)} />
        <Title>Filmmaking</Title>
      </HeaderPanel>
      <HeaderFilmmaking theme={theme}>
        <HamburgerMenu
          onClick={() => setToggleMenu(!toggleMenu)}
          open={toggleMenu}
          theme={theme}
        />
        <Image src={theme === 'dark' ? LogoYoutubeDark : LogoYoutubeLight} width="70px" />
      </HeaderFilmmaking>
      <Main theme={theme}>
        <VideoContainer theme={theme}>
          <PlayerContainer>
            <ReactPlayer
              url={videoSelected?.url}
              width="100%"
              height="100%"
              light
              controls
            />
          </PlayerContainer>
        </VideoContainer>
        <InfoVideoContainer theme={theme}>
          <InfoVideo>
            <InfoTitle>
              <Inter type="filmmakingInfoTitle">{videoSelected?.title}</Inter>
            </InfoTitle>
            <InfoDescription theme={theme}>
              <Inter type="h4">{videoSelected?.description}</Inter>
            </InfoDescription>
          </InfoVideo>
          <Gears>
            <InfoTitle>
              <Inter type="filmmakingInfoTitle">Gears</Inter>
            </InfoTitle>
            {videoSelected?.gears?.map(gear => (
              <Inter type="h4">{gear}</Inter>
            ))}
          </Gears>
          <Links>
            <InfoTitle>
              <Inter type="filmmakingInfoTitle">External Links</Inter>
            </InfoTitle>
            {videoSelected?.links?.map(elm => (
              <ExternalLinks
                theme={theme}
                href={elm.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Inter type="h4" htmlAttribute="span">{elm.name}</Inter>
              </ExternalLinks>
            ))}
          </Links>
        </InfoVideoContainer>
      </Main>
      {toggleMenu && (
        <Overlay onClick={() => setToggleMenu(false)} />
      )}
      {/* MenuVideo position absolute */}
      <MenuVideo open={toggleMenu} theme={theme}>
        {listProjects?.map(proj => (
          <MenuProject
            key={proj.id} 
            selected={proj?.id === videoSelected?.id} 
            theme={theme} 
            onClick={() => onClickMenuProject(proj)} 
          >
            <Inter type="h4">{proj.title}</Inter>
          </MenuProject>
        ))}
      </MenuVideo>

    </PanelContainer>
  );
};

Filmmaking.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Filmmaking);
