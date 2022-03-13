import React from "react";
import PropTypes from "prop-types";
import {CloseOutline as IconClose} from "react-ionicons";
import {useDispatch} from "react-redux";
import {closePanel} from "../../features/panels/panelsSlice";
import {ClosePanel} from "./style";

const ClosePanelMobile = ({ theme, appSelected }) => {
  const dispatch = useDispatch();

  const handleOnClosePanel = (e, app) => {
    e.stopPropagation();
    dispatch(closePanel(app));
  };
  return (
      <ClosePanel
          theme={theme}
          onClick={(e) => handleOnClosePanel(e, appSelected)}
      >
        <IconClose
            color={theme === 'dark' ? '#E7E7E7' : '#3D3D3D'}
            height="24px"
            width="24px"
        />
      </ClosePanel>
  );
};

ClosePanelMobile.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ClosePanelMobile;
