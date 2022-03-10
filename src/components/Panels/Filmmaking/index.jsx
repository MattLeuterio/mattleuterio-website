import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getContent } from "../../../contentful";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import FilmmakingMobile from "./FilmmakingMobile";
import FilmmakingDesktop from "./FilmmakingDesktop";

const Filmmaking = ({
  mediaIsPhone,
  mediaIsTablet,
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

  const actions = {
    onClickContainer,
    onClose,
    theme,
    active,
    dragConstraints,
    onClickMenuProject,
    videoSelected,
    toggleMenu,
    listProjects,
    setToggleMenu
  }

  if (mediaIsPhone || mediaIsTablet) {
    return (
        <FilmmakingMobile
          actions={actions}
        />
    )
  }

  return (
      <FilmmakingDesktop
          actions={actions}
      />
  )
};

Filmmaking.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Filmmaking);
