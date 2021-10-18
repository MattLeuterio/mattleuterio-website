import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PropTypes from "prop-types";
import {
  Container,
  ContentWrapper,
  CurlyBrackets,
  Header,
  JsonInfo,
  Title,
  TitleWrapper,
  Name,
  ImageWrapper,
  Comma
} from "./style";
import {
  Layers as IconSkills,
  CloseOutline as IconClose,
} from "react-ionicons";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import { Image } from "../../atoms";
import Inter from "../../ui/typography/inter";
import { selectDevelopmentImageSelected } from "../../features/development/developmentSlice";

const DevelopmentContent = ({ type, projContent, handleOnClose }) => {
  const imageSelected = useSelector(selectDevelopmentImageSelected);
  const [content, setContent] = useState({});

  useEffect(() => {
    setContent(projContent);
  }, [projContent]);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>
            <IconSkills height="16px" width="16px" color="#CCCCCC" />
            <Inter type="VscTitleContent">{type}</Inter>
            <Inter type="VscTitleContent">...\{content.title}</Inter>
            <IconClose
              onClick={handleOnClose}
              height="16px"
              width="16px"
              color="#CCCCCC"
            />
          </Title>
        </TitleWrapper>
      </Header>
      <ContentWrapper isImage={type === 'image'}>
        {/* Package JSON */}
        {type === "package.json" && (
          <>
            <CurlyBrackets intendationLvl={0} color="y">{"{"}</CurlyBrackets>
              <JsonInfo intendationLvl={2}>
                <Name>"name": </Name>"{content?.packageJson?.name}"<Comma />
              </JsonInfo>
              <JsonInfo intendationLvl={2}>
                <Name>"version": </Name>"{content?.packageJson?.version}"<Comma />
              </JsonInfo>
              <JsonInfo intendationLvl={2}>
                <Name>"private": </Name>"
                {content?.packageJson?.private ? "true" : "false"}"<Comma />
              </JsonInfo>
              <JsonInfo intendationLvl={2}>
                <Name>"dependencies": <CurlyBrackets intendationLvl={1}>{"{"}</CurlyBrackets></Name>
              </JsonInfo>
              {content?.packageJson?.dependencies?.map(dep => (
                <>
                  <JsonInfo intendationLvl={4}>
                    <Name>"{dep?.name}": </Name>"{dep?.version}"<Comma />
                  </JsonInfo>
                </>
              ))}
            <CurlyBrackets intendationLvl={2}>{"}"}</CurlyBrackets>           
            <CurlyBrackets color="y">{"}"}</CurlyBrackets>
          </>
        )}

        {/* README MD */}
        {type === "README.md" && (
          <>
            readme
          </>
        )}

        {/* IMAGE */}
        {type === "image" && (
          <>
            <ImageWrapper>
              <Image 
                src={imageSelected?.fields?.file?.url}
                width="80%"
              />
            </ImageWrapper>
          </>
        )}
      </ContentWrapper>
    </Container>
  );
};

DevelopmentContent.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(DevelopmentContent);
