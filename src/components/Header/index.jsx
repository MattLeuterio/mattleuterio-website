import React, { useState } from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

import { Image, SocialsList } from "../../atoms";
import LogoWhite from "../../ui/assets/img/header-logo-white.png";
import LogoGray from "../../ui/assets/img/header-logo-gray.png";
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
import {openPanel, selectPanels} from "../../features/panels/panelsSlice";

const Header = ({ isLoginPage, mediaIsPhone, mediaIsTablet, theme }) => {
  const dispatch = useDispatch();
  const panels = useSelector(selectPanels);
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

  return (
    <Container login={isLoginPage} isIOS={mediaIsPhone || mediaIsTablet}>
      {(!mediaIsPhone && !mediaIsTablet) && <BackgroundBlur />}
        <>
          {!isLoginPage && (
            <LeftCtn>
              <LogoWrapper open={toggleOption}>
                <Image
                    src={
                      theme === 'light' && Boolean(panels.find(el => el.open && el.name != 'development'))
                      && (mediaIsPhone || mediaIsTablet) ? LogoGray : LogoWhite
                    }
                    width="24px"
                    onClick={() => setToggleOption(!toggleOption)}
                />
              </LogoWrapper>
              <Name isLight={theme === 'light' && Boolean(panels.find(el => el.open && el.name != 'development'))
                  && (mediaIsPhone || mediaIsTablet)}>Matt Leuterio</Name>
            </LeftCtn>
          )}
          {toggleOption && (
            <>
              <Overlay onClick={() => setToggleOption(false)} />
              <OptionCtn>
                {!mediaIsPhone && !mediaIsTablet && (
                    <Inter
                        className="option"
                        type="h4"
                        onClick={() => handleOnClickAbout()}
                    >
                      About this website
                    </Inter>
                )}
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
