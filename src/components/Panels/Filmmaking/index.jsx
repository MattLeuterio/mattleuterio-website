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
  MenuProject
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
      right={150}
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
        <VideoContainer>
          <ReactPlayer
            url={videoSelected?.fields?.url}
            width="100%"
            height="100%"
            controls
          />
        </VideoContainer>
      </Main>
      <InfoVideo theme={theme}>

      </InfoVideo>

      {/* MenuVideo */}
      <MenuVideo open={toggleMenu} theme={theme}>
        {listProjects?.map(proj => (
          <MenuProject
            key={proj.fields.id} 
            selected={proj?.fields?.id === videoSelected?.fields?.id} 
            theme={theme} 
            onClick={() => onClickMenuProject(proj)} 
          >
            <Inter type="h4">{proj.fields.title}</Inter>
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
