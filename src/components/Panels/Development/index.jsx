import React from "react";
import PropTypes from "prop-types";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import DevelopmentDesktop from "./DevelopmentDesktop";
import DevelopmentMobile from "./DevelopmentMobile";

const Development = ({
    mediaIsPhone,
    mediaIsTablet,
    onClickContainer,
    onClose,
    theme,
    active,
    dragConstraints,
}) => {

  const actions = {
    onClickContainer,
    onClose,
    theme,
    active,
    dragConstraints
  }

  if (mediaIsPhone || mediaIsTablet) {
    return (
        <DevelopmentMobile
            actions={actions}
        />
    )
  }

  return (
      <DevelopmentDesktop
          actions={actions}
      />
  )
};

Development.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Development);
