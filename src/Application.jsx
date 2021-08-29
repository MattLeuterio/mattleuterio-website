import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  App,
  Login,
  LoginPage,
  ProfileImg,
  Welcome,
  NameInput,
  InputWrapper,
} from "./appStyles";
import { theme as themeOptions } from "./ui/theme";
import { backgroundChoice } from "./utils";
import ProfileImage from "./ui/assets/img/profile-1.jpg";
import { Image } from "./atoms";
import Helvetica from "./ui/typography/helvetica";
import { ArrowForwardCircleOutline as IconArrow } from "react-ionicons";

// Layout Components
import { Dock, Header } from "./components";
import { Development, Profile, Settings, Trash } from "./components/Panels";
import { useDispatch, useSelector } from "react-redux";
import {
  openPanel,
  closePanel,
  selectPanels,
  setPanelActive,
} from "./features/panels/panelsSlice";

function Application() {
  const dispatch = useDispatch();
  const panels = useSelector(selectPanels);
  const [theme, setTheme] = useState("");
  const [client, setClient] = useState("");
  const [background, setBackground] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const constraintsRef = useRef(null);

  const thumbnailVariants = {
    hidden: {
      transform: "translateY(100%)",
      transition: { duration: 0.6 },
    },
    visible: {
      transform: "translateY(0%)",
      transition: { duration: 0.6 },
    },
    exit: {
      transform: "translateX(-100%)",
      transition: { duration: 0.6 },
    },
  };

  useEffect(() => {
    if (!!!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      setTheme(localStorage.getItem("theme"));
    }

    if (!!!localStorage.getItem("clientName")) {
      localStorage.setItem("clientName", "mate");
      setClient("mate");
    } else {
      setClient(localStorage.getItem("clientName"));
    }

    if (!!!localStorage.getItem("background")) {
      localStorage.setItem("background", "rocks");
      setBackground("rocks");
    } else {
      setBackground(localStorage.getItem("background"));
    }
  }, []);

  useEffect(() => {
    if (!!sessionStorage.getItem("isLogged")) {
      localStorage.setItem("isLogged", true);
      setIsLogged(true);
    }
  }, []);

  const handleOnClickTheme = (selected) => {
    console.log(selected);
    const actual = localStorage.getItem("theme");
    if (selected !== actual) {
      selected === "dark"
        ? localStorage.setItem("theme", "dark")
        : localStorage.setItem("theme", "light");

      setTheme(localStorage.getItem("theme"));
    }
  };
  //console.log(theme);

  const handleOnClickCtnPanel = (name) => {
    dispatch(setPanelActive(name));
  };

  const handleOnClickApp = (app) => {
    dispatch(openPanel(app));
  };

  const handleOnClosePanel = (e, app) => {
    e.stopPropagation();
    dispatch(closePanel(app));
  };

  const handleOnChangeName = (value) => {
    localStorage.setItem("clientName", value);
    setClient(value);
  };

  const handleOnChangeBackground = (value) => {
    localStorage.setItem("background", value);
    setBackground(value);
  };

  const handleOnKeyPressEnter = (e) => {
    const newValue = e.target.value;
    if (e.key === "Enter" && newValue.length > 0) {
      localStorage.setItem("clientName", newValue);
      sessionStorage.setItem("isLogged", true);
      setClient(newValue);
      setIsLogged(true);
    }
  };

  const handleOnClickIconSetName = (e) => {
    const newValue = e.target.value;
    localStorage.setItem("clientName", newValue);
    setClient(newValue);
  };

  const onClickIconNameLogin = () => {
    localStorage.setItem("clientName", client);
    sessionStorage.setItem("isLogged", true);
    setClient(client);
    setIsLogged(true);
  };

  // eslint-disable-next-line no-lone-blocks
  {
    /* <GlobalLayout
        as={motion.div}
        variants={thumbnailVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      > 
      </GlobalLayout> */
  }

  return (
    <>
      {isLogged ? (
        <App
          ref={constraintsRef}
          as={motion.div}
          background={backgroundChoice(theme, background)}
          theme={theme}
        >
          <Header />
          <Welcome>Welcome, {client}</Welcome>

          {/* SETTINGS PANEL */}
          {panels?.find((panel) => panel.name === "settings").open && (
            <Settings
              theme={theme}
              dragConstraints={constraintsRef}
              value={client}
              active={panels?.find((panel) => panel.name === "settings").active}
              onClickContainer={() => handleOnClickCtnPanel("settings")}
              onClose={(e) => handleOnClosePanel(e, "settings")}
              onClickTheme={(themeChoice) => handleOnClickTheme(themeChoice)}
              onChangeName={(value) => handleOnChangeName(value)}
              //onKeyPressEnter={(e) => handleOnKeyPressEnter(e)}
              onClickIconSetName={(e) => handleOnClickIconSetName(e)}
              onChangeBackground={(value) => handleOnChangeBackground(value)}
              bgSelected={background}
            />
          )}

          {/* PROFILE */}
          {panels?.find((panel) => panel.name === "profile").open && (
            <Profile
              theme={theme}
              dragConstraints={constraintsRef}
              active={panels?.find((panel) => panel.name === "profile").active}
              onClickContainer={() => handleOnClickCtnPanel("profile")}
              onClose={(e) => handleOnClosePanel(e, "profile")}
            />
          )}

          {/* TRASH */}
          {panels?.find((panel) => panel.name === "trash").open && (
            <Trash
              theme={theme}
              dragConstraints={constraintsRef}
              active={panels?.find((panel) => panel.name === "trash").active}
              onClickContainer={() => handleOnClickCtnPanel("trash")}
              onClose={(e) => handleOnClosePanel(e, "trash")}
            />
          )}

          {/* DEVELOPMENT */}
          {panels?.find((panel) => panel.name === "development").open && (
            <Development
              theme={theme}
              dragConstraints={constraintsRef}
              active={
                panels?.find((panel) => panel.name === "development").active
              }
              onClickContainer={() => handleOnClickCtnPanel("development")}
              onClose={(e) => handleOnClosePanel(e, "development")}
            />
          )}

          {/* Dock -> fixed */}
          <Dock onClickApp={(app) => handleOnClickApp(app)} />
        </App>
      ) : (
        <LoginPage
          background={backgroundChoice(theme, background)}
          theme={theme}
        >
          <Header isLoginPage />

          <Login>
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
                onChange={(e) => handleOnChangeName(e.target.value)}
                onKeyPress={(client) => handleOnKeyPressEnter(client)}
              />
              <IconArrow
                onClick={() => onClickIconNameLogin()}
                theme={theme}
                width="34px"
                height="34px"
                color={theme === "dark" ? "#c5c5c5" : "#3D3D3D"}
              />
            </InputWrapper>
            <Helvetica configuration={{ textAlign: "center" }} type="h3">
              Insert your name and press enter
            </Helvetica>
          </Login>
        </LoginPage>
      )}
    </>
  );
}

export default Application;
