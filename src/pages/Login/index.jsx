import React from "react";

import { 
  InputWrapper, LoginPage, NameInput, ProfileImg, LoginWrapper 
} from "./style";
import { Header } from "../../components";
import { Image } from "../../atoms";
import Helvetica from "../../ui/typography/helvetica";
import { ArrowForwardCircleOutline as IconArrow } from "react-ionicons";
import { backgroundChoice } from "../../utils";
import ProfileImage from "../../ui/assets/img/profile-1.jpg";

const Login = ({ 
  theme, client, onChangeName, background,
  onKeyPressEnter, onClickIconNameLogin
}) => (
    <LoginPage
      background={backgroundChoice(theme, background)}
      theme={theme}
    >
      <Header isLoginPage />
      <LoginWrapper>
        <ProfileImg>
          <Image src={ProfileImage} width="138px" height="138px" />
        </ProfileImg>
        <Helvetica type="loginHello">Hello, it's Matt</Helvetica>
        <InputWrapper>
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
            color={theme === "dark" ? "#c5c5c5" : "#3D3D3D"}
          />
        </InputWrapper>
        <Helvetica configuration={{ textAlign: "center" }} type="h3">
          Insert your name and press enter
        </Helvetica>
      </LoginWrapper>
    </LoginPage>
);

export default Login;
