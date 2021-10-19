import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  HeaderPanel,
  Title,
  Main,
  HeaderFilmmaking,
  InfoVideo,
  MenuVideo
} from "./style";
import { getContent } from "../../../contentful";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { HamburgerMenu, Image, PanelContainer, PanelControls } from "../../../atoms";
import {
  ShareSocial as IconSocials,
  Layers as IconSkills,
} from "react-ionicons";
import LogoYoutubeDark from '../../../ui/assets/img/youtube-logo-dark.png';
import LogoYoutubeLight from '../../../ui/assets/img/youtube-logo-light.png';

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

  useEffect(() => {
    getContent("filmmaking", setListProjects);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('listProjects', listProjects);

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
      </Main>
      <InfoVideo theme={theme}>

      </InfoVideo>

      {/* MenuVideo */}
      <MenuVideo open={toggleMenu} theme={theme}>

      </MenuVideo>
    </PanelContainer>
  );
};

Filmmaking.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Filmmaking);
