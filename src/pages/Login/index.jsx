import React from "react";

import {
  InputWrapper, LoginPage, NameInput, ProfileImg, LoginWrapper, DateTimeWrapper, DateTime
} from "./style";
import { Header } from "../../components";
import { Image } from "../../atoms";
import Inter from "../../ui/typography/inter";
import { ArrowForwardCircleOutline as IconArrow } from "react-ionicons";
import { backgroundChoice } from "../../utils";
import ProfileImage from "../../ui/assets/img/profile-1.jpg";
import {withMediaQueries} from "../../hoc/withMediaQueries";
import {IconLock} from "../../ui/assets/img/icons";
import Clock from "react-live-clock";

const Login = ({
  mediaIsPhone, mediaIsTablet,
  theme, client, onChangeName, background,
  onKeyPressEnter, onClickIconNameLogin
}) => {
  // Get timezone from Visitor
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
      <LoginPage
          background={backgroundChoice(theme, background)}
          theme={theme}
      >
        <Header isLoginPage />
        <LoginWrapper>
          {(!mediaIsPhone && !mediaIsTablet) ? (
              <ProfileImg>
                <Image src={ProfileImage} width="138px" height="138px"/>
              </ProfileImg>
          ) : (
              <DateTimeWrapper>
                <Image src={IconLock} width="22px"/>
                <DateTime>
                  <Clock format={"HH:mm"} ticking={true} timezone={tz}/>
                  <Clock format={"dddd, MMMM D"} ticking={true} timezone={tz}/>
                </DateTime>
              </DateTimeWrapper>
          )}
          <Inter type={(!mediaIsPhone && !mediaIsTablet) ? "loginHello" : 'loginHelloMobile'}>Hello, it's Matt</Inter>
          <InputWrapper disabled={client.length > 0}>
            <NameInput
                theme={theme}
                type="text"
                value={client}
                maxLength="20"
                placeholder="Name"
                onChange={onChangeName}
                onKeyPress={onKeyPressEnter}
            />
            <IconArrow
                onClick={onClickIconNameLogin}
                theme={theme}
                width="34px"
                height="34px"
                color={theme === "dark" ? "#c5c5c5" : "#ababab"}
            />
          </InputWrapper>
          <Inter configuration={{textAlign: "center"}} type="h3">
            Insert your name and press enter
          </Inter>
        </LoginWrapper>
      </LoginPage>
  )
};

export default withMediaQueries(Login);
