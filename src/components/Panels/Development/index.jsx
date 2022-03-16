import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { withMediaQueries } from "../../../hoc/withMediaQueries";
import DevelopmentDesktop from "./DevelopmentDesktop";
import DevelopmentMobile from "./DevelopmentMobile";
import {useDispatch, useSelector} from "react-redux";
import {selectDevelopmentContentType, setContentType} from "../../../features/development/developmentSlice";
import {getContent} from "../../../contentful";

const Development = ({
    mediaIsPhone,
    mediaIsTablet,
    onClickContainer,
    onClose,
    theme,
    active,
    dragConstraints,
}) => {
    const dispatch = useDispatch();
    const devContentType = useSelector(selectDevelopmentContentType);
    const [listProjects, setListProjects] = useState([]);
    const [typeContents, setTypeContents] = useState("");
    const [content, setContent] = useState({});

    useEffect(() => {
        getContent("development", setListProjects);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        setTypeContents(devContentType);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [devContentType]);

    const handleOnSetContents = (proj) => {
        setContent(proj);
    };

    const handleOnClosePanelContent = () => {
        dispatch(setContentType(''));
        setTypeContents("");
        setContent({});
    };

    const actions = {
    onClickContainer,
    onClose,
    theme,
    active,
    dragConstraints,
    devContentType,
    listProjects,
    setListProjects,
    typeContents,
    setTypeContents,
    content,
    setContent,
    handleOnSetContents,
    handleOnClosePanelContent
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
