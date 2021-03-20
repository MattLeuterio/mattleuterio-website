import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../atoms";
import Logo from "../../ui/assets/img/header-logo-white.png";
import {
  BackgroundBlur,
  Container,
  LeftCtn,
  Name,
  Date,
  RightCtn,
  LinkSocial,
  Social,
} from "./style";
// using Moment.js
import Clock from "react-live-clock";
import {
  LogoInstagram as IconInsta,
  LogoGithub as IconGithub,
  LogoLinkedin as IconLinkedin,
} from "react-ionicons";
import { withMediaQueries } from "../../hoc/withMediaQueries";

const Header = ({ theme, mediaIsPhone }) => {
  // Get timezone from Visitor
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <>
      <Container theme={theme}>
        {!mediaIsPhone && <BackgroundBlur />}
        <LeftCtn>
          <Image src={Logo} width="24px" />
          <Name>Matt Leuterio</Name>
        </LeftCtn>
        <RightCtn>
          <Social>
            <LinkSocial
              href="https://www.instagram.com/matt.leuterio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInsta color="#E7E7E7" height="15px" width="15px" />
            </LinkSocial>
            <LinkSocial
              href="https://github.com/MattLeuterio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub color="#E7E7E7" height="15px" width="15px" />
            </LinkSocial>
            <LinkSocial
              href="https://www.linkedin.com/in/matteo-leuterio-7b3b4641/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedin color="#E7E7E7" height="15px" width="15px" />
            </LinkSocial>
          </Social>
          <Date>
            <Clock format={"dd MMM D"} ticking={true} timezone={tz} />
            <Clock format={"HH:mm"} ticking={true} timezone={tz} />
          </Date>
        </RightCtn>
      </Container>
    </>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Header);
