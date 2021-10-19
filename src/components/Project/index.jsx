import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { File, FileImage, Files, FolderImages, HeaderFolder, HeaderFolderImages, ProjectFolder, TitleFile, TitleProject } from "./style";
import {
  ChevronForwardOutline as IconArrow,
  ShareSocial as IconSocials,
  Layers as IconSkills,
  LogoNodejs as IconPackageJson,
  InformationCircle as IconReadme,
  Images as IconImages,
  Image as IconImage
} from "react-ionicons";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import { selectDevelopmentContentType, selectDevelopmentImageSelected, setContentType, setImageSelected } from "../../features/development/developmentSlice";

const Project = ({ project, onClickSetContents, selected }) => {
  const dispatch = useDispatch();
  const devContentType = useSelector(selectDevelopmentContentType);
  const devImageSelected = useSelector(selectDevelopmentImageSelected);
  const [openFolder, setOpenFolder] = useState(false);
  const [openFolderImages, setOpenFolderImages] = useState(false);
  const [typeContents, setTypeContents] = useState(devContentType);

  useEffect(() => {
    dispatch(setContentType(typeContents));
  }, [typeContents]);


  const handleOnClickFile = (type, imgId) => {
    setTypeContents(type);
    onClickSetContents();
    if (type === 'image') {
      const img = project?.fields?.images.find(el => el.sys.id === imgId);
      dispatch(setImageSelected(img));
    }
  };

  return (
    <ProjectFolder>
      <HeaderFolder
        openProjFolder={openFolder}
        onClick={() => setOpenFolder(!openFolder)}
      >
        <IconArrow height="16px" width="16px" color="#CCCCCC" />
        <TitleProject>{project?.fields?.title}</TitleProject>
      </HeaderFolder>
      <Files openProjFolder={openFolder}>
        {(Object.keys(project?.fields?.packageJson).length > 0) && (
          <File
            selected={selected && typeContents === 'package.json'}
            type='package.json'
            onClick={() => handleOnClickFile('package.json')}
          >
            <IconPackageJson height="16px" width="16px" color="#5b7c3b" />
            <TitleFile>package.json</TitleFile>
          </File>
        )}
        <File
          selected={selected && typeContents === 'README.md'}
          type='README.md'
          onClick={() => handleOnClickFile('README.md')}
        >
          <IconReadme height="16px" width="16px" color="#42a5f5" />
          <TitleFile>README.md</TitleFile>
        </File>
        {project?.fields?.images.length > 0 && (
          <>
            <HeaderFolderImages
              openProjFolder={openFolderImages}
              onClick={() => setOpenFolderImages(!openFolderImages)}
            >
              <IconArrow
                className="icon-arrow"
                height="16px"
                width="16px"
                color="#CCCCCC"
              />
              <IconImages
                className="icon-folder"
                height="16px"
                width="16px"
                color="#009688"
              />
              <TitleFile>Images</TitleFile>
            </HeaderFolderImages>
            <FolderImages openProjFolder={openFolderImages}>
              {project?.fields?.images.map((img, index) => (
                <FileImage
                  key={index}
                  selected={
                    selected
                    && typeContents === 'image'
                    && img?.sys?.id === devImageSelected?.sys?.id
                  }
                  type='image'
                  onClick={() => handleOnClickFile('image', img?.sys?.id)}
                >
                  <IconImage
                    className="icon-folder"
                    height="16px"
                    width="16px"
                    color="#26a69a"
                  />
                  <TitleFile>{img.fields?.title}</TitleFile>
                </FileImage>
              ))}
            </FolderImages>
          </>
        )}
      </Files>
    </ProjectFolder>
  );
};

Project.propTypes = {

};

export default withMediaQueries(Project);
