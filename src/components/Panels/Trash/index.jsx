import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  HeaderPanel,
  Title,
  Contents,
  Element,
  ElementName
} from "./style";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import { Image, PanelContainer, PanelControls } from "../../../atoms";
import {
  IconAndroid,
  IconPHP,
  IconJquery,
  IconWindows,
  IconComicSans
} from "../../../ui/assets/img/icons";
import ImgProfile1 from "../../../ui/assets/img/profile-1.jpg";
import ImgProfile2 from "../../../ui/assets/img/profile-2.jpg";
import { getContent } from "../../../contentful";

const Profile = ({
  mediaIsPhone,
  onClickContainer,
  onClose,
  theme,
  active,
  dragConstraints,
}) => {
  const [section, setSection] = useState("about");
  const [listSkills, setListSkills] = useState([]);

  useEffect(() => {
    getContent("skills", setListSkills);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const trashElement = [
    {
      name: "Android",
      icon: <Image src={IconAndroid} width="55px" />
    },
    {
      name: "PHP",
      icon: <Image src={IconPHP} width="55px" />
    },
    {
      name: "jQuery",
      icon: <Image src={IconJquery} width="55px" />
    },
    {
      name: "Windows",
      icon: <Image src={IconWindows} width="55px" />
    },
    {
      name: "Comic Sans",
      icon: <Image src={IconComicSans} width="55px" />
    },
  ];

  return (
    <PanelContainer
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      theme={theme}
      widthPan={580}
      heightPan={330}
      bottom={150}
      right={50}
      display="block"
    >
      <HeaderPanel theme={theme}>
        <PanelControls onClickClose={(e) => onClose(e)} />
        <Title>Trash</Title>
      </HeaderPanel>
      <Contents>
        {trashElement.map(element => (
          <Element key={element.name}>
            {element.icon}
            <ElementName theme={theme}>{element.name}</ElementName>
          </Element>
        ))}
      </Contents>
    </PanelContainer>
  );
};

Profile.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Profile);
