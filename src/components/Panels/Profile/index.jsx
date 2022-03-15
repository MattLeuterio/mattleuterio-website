import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { withMediaQueries } from "../../../hoc/withMediaQueries";
import {
  CardOutline as IconAbout,
  ShareSocial as IconSocials,
  Layers as IconSkills,
} from "react-ionicons";
import { getContent } from "../../../contentful";
import ProfileDesktop from "./ProfileDesktop";
import ProfileMobile from "./ProfileMobile";

const Profile = ({
  mediaIsPhone,
  mediaIsTablet,
  onClickContainer,
  onClose,
  theme,
  active,
  dragConstraints,
}) => {
  const initialStateSection = (!mediaIsPhone && !mediaIsTablet) ? 'about' : '';
  console.log('initialStateSection', initialStateSection);
  const [section, setSection] = useState(initialStateSection);
  const [listSkills, setListSkills] = useState([]);

  useEffect(() => {
    getContent("skills", setListSkills);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSection(initialStateSection);
  }, [initialStateSection])

  const profileSections = [
    {
      name: "about",
      icon: <IconAbout height="18px" width="18px" color="#FFBB2E" />,
    },
    {
      name: "skills",
      icon: <IconSkills height="18px" width="18px" color="#FFBB2E" />,
    },
    {
      name: "socials",
      icon: <IconSocials height="18px" width="18px" color="#FFBB2E" />,
    },
  ];

  const actions = {
    onClickContainer,
    onClose,
    theme,
    active,
    dragConstraints,
    profileSections,
    section,
    setSection,
    listSkills,
    setListSkills
  }

  if (mediaIsPhone || mediaIsTablet) {
    return (
        <ProfileMobile actions={actions} />
    )
  }

  return (
      <ProfileDesktop actions={actions} />
  )
};

Profile.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Profile);
