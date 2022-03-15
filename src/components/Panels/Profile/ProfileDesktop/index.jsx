import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  SidebarContainer,
  Main,
  Contents,
  MenuSections,
  MenuSection,
  TitleSection,
  TitleMenu,
  TitleSectionContents,
  Images,
  ImageProfile,
  AboutText,
  Section,
  NameSection,
  ListSkills,
  SkillValue
} from "./style";
import { withMediaQueries } from "../../../../hoc/withMediaQueries";
import { PanelContainer, PanelControls, SocialsList, HeaderPanel } from "../../../../atoms";
import {
  CardOutline as IconAbout,
  ShareSocial as IconSocials,
  Layers as IconSkills,
} from "react-ionicons";
import ImgProfile1 from "../../../../ui/assets/img/profile-1.jpg";
import ImgProfile2 from "../../../../ui/assets/img/profile-2.jpg";
import { getContent } from "../../../../contentful";

const ProfileDesktop = ({
  mediaIsPhone,
  actions: {
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
}) => {
  return (
    <PanelContainer
      dragConstraintsRef={dragConstraints}
      onClickPanelContainer={() => onClickContainer()}
      active={active}
      theme={theme}
      widthPan={585}
      heightPan={610}
      top={100}
      left={50}
      noBackground
      display="flex"
    >
      <SidebarContainer>
        <PanelControls onClickClose={(e) => onClose(e)} />
        <TitleMenu>Sections</TitleMenu>
        <MenuSections>
          {profileSections.map((sec) => (
            <MenuSection
              key={sec.name}
              active={section === sec.name}
              onClick={() => setSection(sec.name)}
            >
              {sec.icon}
              <TitleSection>{sec.name}</TitleSection>
            </MenuSection>
          ))}
        </MenuSections>
      </SidebarContainer>
      <Main theme={theme}>
        <HeaderPanel theme={theme} onClickClose={(e) => onClose(e)} title="Profile" />
        <Contents>
          {section === "about" && (
            <>
              <TitleSectionContents theme={theme}>About</TitleSectionContents>
              <Images>
                <ImageProfile image={ImgProfile1} />
                <ImageProfile image={ImgProfile2} />
              </Images>
              <AboutText theme={theme}>
                Ambitious and curious, I am a technology and coding enthusiast.
                <br />
                <br />
                I love seeing my creations take shape and I am open to
                discussions and suggestions in order to improve every detail.
                All this gave birth to my passion for the front-end and the user
                experience.
                <br />
                <br />
                I worked as a videomaker, trying every day to improve myself
                both as a person and as a professional and refining my skills I
                got to work on the production of a documentary in New York.
                <br />
                <br />I enjoy challenges and the clean and efficient code.
              </AboutText>
            </>
          )}

          {section === "skills" && (
            <>
              <TitleSectionContents theme={theme}>Skills</TitleSectionContents>
              {listSkills.map((section, index) => (
                <Section key={index}>
                  <NameSection theme={theme}>{section.section}</NameSection>
                  <ListSkills>
                    {section.values.map((skill, index) => (
                      <SkillValue key={index} theme={theme}>{skill}</SkillValue>
                    ))}
                  </ListSkills>
                </Section>
              ))}
            </>
          )}

          {section === "socials" && (
            <>
              <TitleSectionContents theme={theme}>Socials</TitleSectionContents>
              <Section>
                <SocialsList color={theme === 'dark' ? '#E7E7E7' : '#3D3D3D'} iconSize="25px" theme={theme} flexDirection="column" nameSocial />
              </Section>
            </>
          )}
        </Contents>
      </Main>
    </PanelContainer>
  );
};

ProfileDesktop.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(ProfileDesktop);
