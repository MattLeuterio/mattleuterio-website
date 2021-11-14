import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { Image, SocialsList } from "../../atoms";
import Logo from "../../ui/assets/img/header-logo-white.png";
import {
  BackgroundBlur,
  Container,
  LeftCtn,
  Name,
  Date,
  RightCtn,
  OptionCtn,
  OptionTop,
  Overlay,
  LogoWrapper,
} from "./style";
import Clock from "react-live-clock"; // using Moment.js
import { withMediaQueries } from "../../hoc/withMediaQueries";
import Inter from "../../ui/typography/inter";
import { openPanel } from "../../features/panels/panelsSlice";

const Header = ({ isLoginPage, mediaIsPhone, mediaIsTablet }) => {
  const dispatch = useDispatch();
  const [toggleOption, setToggleOption] = useState(false);
  // Get timezone from Visitor
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const handleOnClickAbout = () => {
    dispatch(openPanel("about"));
    setToggleOption(false);
  };

  const handleOnClickPreferences = () => {
    dispatch(openPanel("settings"));
    setToggleOption(false);
  };

  const handleOnClickShutDown = () => {
    setToggleOption(false);
    sessionStorage.removeItem("isLogged");
    document.location.reload();
  };

  console.log('mediaIsPhone', mediaIsPhone);
  console.log('mediaIsTablet', mediaIsTablet);

  return (
    <Container login={isLoginPage} isIOS={mediaIsPhone || mediaIsTablet}>
      {(!mediaIsPhone && !mediaIsTablet) && <BackgroundBlur />}
      {!isLoginPage && (
        <>
          <LeftCtn>
            <LogoWrapper open={toggleOption}>
              <Image
                src={Logo}
                width="24px"
                onClick={() => setToggleOption(!toggleOption)}
              />
            </LogoWrapper>
            <Name>Matt Leuterio</Name>
          </LeftCtn>
          {toggleOption && (
            <>
              <Overlay onClick={() => setToggleOption(false)} />
              <OptionCtn>
                <Inter
                  className="option"
                  type="h4"
                  onClick={() => handleOnClickAbout()}
                >
                  About this website
                </Inter>
                <Inter
                  className="option"
                  type="h4"
                  onClick={() => handleOnClickPreferences()}
                >
                  Website Preferences...
                </Inter>
                <Inter
                  className="option"
                  type="h4"
                  onClick={() => handleOnClickShutDown()}
                >
                  Shut Down...
                </Inter>
              </OptionCtn>
            </>
          )}
        </>
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
