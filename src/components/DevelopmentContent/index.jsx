import React, { useEffect, useState } from "react";
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
} from "./style";
import {
  Layers as IconSkills,
  CloseOutline as IconClose,
} from "react-ionicons";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import Helvetica from "../../ui/typography/helvetica";

const DevelopmentContent = ({ type, projContent, handleOnClose }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    setContent(projContent);
  }, []);

  console.log("content", content);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>
            <IconSkills height="16px" width="16px" color="#CCCCCC" />
            <Helvetica type="VscTitleContent">{type}</Helvetica>
            <Helvetica type="VscTitleContent">...\{content.title}</Helvetica>
            <IconClose
              onClick={handleOnClose}
              height="16px"
              width="16px"
              color="#CCCCCC"
            />
          </Title>
        </TitleWrapper>
      </Header>
      {/* Package JSON */}
      <ContentWrapper>
        {type === "package.json" && (
          <>
            <CurlyBrackets color="y">{"{"}</CurlyBrackets>
            <JsonInfo>
              <Name>"name": </Name>"{content?.packageJson?.name}"
            </JsonInfo>
            <JsonInfo>
              <Name>"version": </Name>"{content?.packageJson?.version}"
            </JsonInfo>
            <JsonInfo>
              <Name>"private": </Name>"
              {content?.packageJson?.private ? "true" : "false"}"
            </JsonInfo>
            {/* {content?.packageJson?.dependencies.map(dep => (

              ))} */}
            <CurlyBrackets color="y">{"}"}</CurlyBrackets>
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
