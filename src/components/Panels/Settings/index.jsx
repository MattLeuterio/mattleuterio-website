import React from "react";
import PropTypes from "prop-types";

import { withMediaQueries } from "../../../hoc/withMediaQueries";
import SettingsMobile from "./SettingsMobile";
import SettingsDesktop from "./SettingsDesktop";

const Settings = ({
  mediaIsPhone,
  mediaIsTablet,
  onClickContainer,
  onClickTheme,
  onChangeName,
  onChangeBackground,
  onClose,
  value,
  theme,
  active,
  bgSelected,
  dragConstraints,
}) => {
  const bgsList = [
    {
      type: "dark",
      name: "rocks",
    },
    {
      type: "dark",
      name: "beach",
    },
    {
      type: "dark",
      name: "clouds",
    },
    {
      type: "dark",
      name: "daylight",
    },
    {
      type: "light",
      name: "rocks",
    },
    {
      type: "light",
      name: "beach",
    },
    {
      type: "light",
      name: "clouds",
    },
    {
      type: "light",
      name: "daylight",
    },
  ];

  const actions = {
    onClickContainer,
    onClickTheme,
    onChangeName,
    onChangeBackground,
    onClose,
    value,
    theme,
    active,
    bgSelected,
    dragConstraints,
    bgsList
  }

  if (mediaIsPhone || mediaIsTablet) {
    return (
        <SettingsMobile actions={actions} />
    )
  }

  return (
      <SettingsDesktop actions={actions} />
  )
};

Settings.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Settings);
