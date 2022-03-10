import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
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
import { getContent } from "../../../../contentful";
import ReactPlayer from 'react-player';
import { withMediaQueries } from "../../../../hoc/withMediaQueries";
import { HamburgerMenu, Image, PanelContainer, HeaderPanel } from "../../../../atoms";
import {
  ShareSocial as IconSocials,
  Layers as IconSkills,
} from "react-ionicons";
import LogoYoutubeDark from '../../../../ui/assets/img/youtube-logo-dark.png';
import LogoYoutubeLight from '../../../../ui/assets/img/youtube-logo-light.png';
import Inter from "../../../../ui/typography/inter";

const FilmmakingDesktop = ({
  mediaIsPhone,
  actions: {
    onClickContainer, onClose, theme,
    active, dragConstraints, onClickMenuProject,
    videoSelected, toggleMenu, listProjects,
    setToggleMenu
  }
}) => {

  return (
    <PanelContainer
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      theme={theme}
      widthPan={950}
      heightPan={650}
      top={50}
      right={150}
      noBackground
      display="flex"
      flexDirection="column"
    >
      <HeaderPanel theme={theme} onClickClose={(e) => onClose(e)} title="Filmmaking" />
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

FilmmakingDesktop.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(FilmmakingDesktop);
