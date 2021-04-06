import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { App, Welcome } from "./appStyles";

// Layout Components
import { Dock, Header } from "./components";
import { Profile, Settings } from "./components/Panels";
import { useDispatch, useSelector } from "react-redux";
import {
  openPanel,
  closePanel,
  selectPanels,
  setPanelActive,
} from "./features/panels/panelsSlice";
import { backgroundChoice } from "./utils";

const initialTheme = !!localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "dark";

const initialClient = !!localStorage.getItem("clientName")
  ? localStorage.getItem("clientName")
  : "mate";

const initialBackground = !!localStorage.getItem("background")
  ? localStorage.getItem("background")
  : "rocks";

function Application() {
  const dispatch = useDispatch();
  const panels = useSelector(selectPanels);
  const [theme, setTheme] = useState(initialTheme);
  const [client, setClient] = useState(initialClient);
  const [background, setBackground] = useState(initialBackground);
  const constraintsRef = useRef(null);

  useEffect(() => {
    console.log("background", background);
    console.log("client", client);
    console.log("theme", theme);
    //setBackground();
  }, [background, client, theme]);

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
    console.log("app", app);
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

  // const handleOnKeyPressEnter = (e) => {
  //   const newValue = e.target.value;
  //   if (e.key === "Enter" && newValue.length > 0) {
  //     localStorage.setItem("clientName", newValue);
  //     setClient(newValue);
  //   }
  // };

  const handleOnClickIconSetName = (e) => {
    const newValue = e.target.value;
    localStorage.setItem("clientName", newValue);
    setClient(newValue);
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

  console.log(background);

  return (
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
          active={panels?.find((panel) => panel.name === "profile").active}
          onClickContainer={() => handleOnClickCtnPanel("profile")}
          onClose={(e) => handleOnClosePanel(e, "profile")}
        />
      )}

      {/* Dock -> fixed */}
      <Dock onClickApp={(app) => handleOnClickApp(app)} />
    </App>
  );
}

export default Application;
