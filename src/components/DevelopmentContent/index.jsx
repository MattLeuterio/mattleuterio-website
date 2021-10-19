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
  Comma,
  SectionReadme,
  Intestation,
  Body,
  Span,
  LinkReadme
} from "./style";
import {
  Layers as IconSkills,
  CloseOutline as IconClose,
} from "react-ionicons";

import { withMediaQueries } from "../../hoc/withMediaQueries";
import { Image } from "../../atoms";
import Inter from "../../ui/typography/inter";
import Roboto from "../../ui/typography/roboto";
import { selectDevelopmentImageSelected } from "../../features/development/developmentSlice";
import theme from "../../ui/theme";

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
              {content?.packageJson?.dependencies?.map((dep, index) => (
                <>
                  <JsonInfo intendationLvl={4} key={index}>
                    <Name key={dep.name}>"{dep?.name}": </Name>"{dep?.version}"<Comma />
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
              <SectionReadme>
                <Intestation hasMargin>
                  <Roboto type="vscReadme">{`# ${content?.title}`}</Roboto>
                </Intestation>
                <Body>
                  <Roboto type="vscReadme">
                    <Span color={theme.colors.global.yellow}>{`**${content?.title}**`}</Span> {content?.description}
                  </Roboto>
                </Body>
              </SectionReadme>
              {content?.responsive && (
                <SectionReadme>
                  <Intestation hasMargin>
                    <Roboto type="vscReadme">## Responsive </Roboto>
                  </Intestation>
                  <Body>
                    <Roboto type="vscReadme">
                      {content?.title} is designed for mobile and desktop devices.
                    </Roboto>
                  </Body>
                </SectionReadme>
              )}
              {(content?.links.length > 0) && (
                <SectionReadme>
                  <Intestation>
                    <Roboto type="vscReadme">## Links </Roboto>
                  </Intestation>
                  <Body>
                    {content?.links.map((elm, index) => (
                      <Roboto type="vscReadme" key={index}>
                        <Span color={theme.colors.readme.pink}>{`**${elm.name}**`}</Span>
                        {` - `}
                        <LinkReadme
                          href={elm.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {elm.href}
                        </LinkReadme>
                      </Roboto>
                    ))}
                  </Body>
                </SectionReadme>
              )}
              {content?.tech?.length > 0 && (
                <SectionReadme>
                <Intestation>
                  <Roboto type="vscReadme">## Tech</Roboto>
                </Intestation>
                <Intestation style={{ color: 'inherit' }} hasMargin>
                  <Roboto type="vscReadme">{content.title} uses:</Roboto>
                </Intestation>
                <Body>
                  {content?.tech.map((elm, index) => (
                    <Roboto type="vscReadme" key={index}>
                      {`* `}
                      <Span color={theme.colors.readme.lightBlue}>[</Span>
                      {elm.title}
                      <Span color={theme.colors.readme.lightBlue}>]</Span>
                      {'('}
                      <Span color={theme.colors.readme.redPink}>
                        <LinkReadme
                          href={elm.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {elm.href}
                        </LinkReadme>
                      </Span>
                      {')'}
                      {` - `}{elm.slogan}
                    </Roboto>
                  ))}
                </Body>
              </SectionReadme>
              )}
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
