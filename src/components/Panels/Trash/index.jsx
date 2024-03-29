import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  Contents,
  Element,
  ElementName
} from "./style";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import {Image, PanelContainer, HeaderPanel, ClosePanelMobile} from "../../../atoms";
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
  mediaIsTablet,
  onClickContainer,
  onClose,
  theme,
  active,
  dragConstraints,
  open
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
      id="panel-trash"
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      open={open}
      theme={theme}
      widthPan={580}
      heightPan={330}
      bottom={150}
      right={50}
      display="block"
    >
      <HeaderPanel theme={theme} onClickClose={(e) => onClose(e)} title="Trash" />
      <Contents>
        {trashElement.map(element => (
          <Element key={element.name}>
            {element.icon}
            <ElementName theme={theme}>{element.name}</ElementName>
          </Element>
        ))}
      </Contents>
      {(mediaIsPhone || mediaIsTablet) && (
          <ClosePanelMobile
              theme={theme}
              appSelected='trash'
          />
      )}
    </PanelContainer>
  );
};

Profile.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Profile);
