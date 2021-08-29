import React from "react";
import PropTypes from "prop-types";
import { Image, SocialsList } from "../../atoms";
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
import { withMediaQueries } from "../../hoc/withMediaQueries";

const Header = ({ isLoginPage, mediaIsPhone }) => {
  // Get timezone from Visitor
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <Container login={isLoginPage}>
      {!mediaIsPhone && <BackgroundBlur />}
      {!isLoginPage && (
        <LeftCtn>
          <Image src={Logo} width="24px" />
          <Name>Matt Leuterio</Name>
        </LeftCtn>
      )}
      <RightCtn>
        <SocialsList />
        <Date>
          <Clock format={"dd MMM D"} ticking={true} timezone={tz} />
          <Clock format={"HH:mm"} ticking={true} timezone={tz} />
        </Date>
      </RightCtn>
    </Container>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Header);
