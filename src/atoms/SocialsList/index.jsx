import React from "react";
import PropTypes from "prop-types";
import { LinkSocial, Social, SocialName } from "./style";
import {
  LogoInstagram as IconInsta,
  LogoGithub as IconGithub,
  LogoLinkedin as IconLinkedin,
} from "react-ionicons";

const SocialsList = ({ 
  flexDirection = "row", nameSocial = false, theme, iconSize = '15px' 
}) => {
  return (
    <Social nameSocial={nameSocial} flexDirection={flexDirection}>
      <LinkSocial
        nameSocial={nameSocial}
        href="https://www.instagram.com/matt.leuterio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconInsta color="#E7E7E7" height={iconSize} width={iconSize} />
        {nameSocial && (<SocialName theme={theme}>Instagram</SocialName>)}
      </LinkSocial>
      <LinkSocial
        nameSocial={nameSocial}
        href="https://github.com/MattLeuterio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGithub color="#E7E7E7" height={iconSize} width={iconSize} />
        {nameSocial && (<SocialName theme={theme}>Github</SocialName>)}
      </LinkSocial>
      <LinkSocial
        nameSocial={nameSocial}
        href="https://www.linkedin.com/in/matteo-leuterio-7b3b4641/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconLinkedin color="#E7E7E7" height={iconSize} width={iconSize} />
        {nameSocial && (<SocialName theme={theme}>Linkedin</SocialName>)}
      </LinkSocial>
    </Social>
  );
};

SocialsList.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default SocialsList;
