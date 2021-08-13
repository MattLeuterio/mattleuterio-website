import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { App, Welcome } from "./appStyles";

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
  const [theme, setTheme] = useState("");
  const [client, setClient] = useState("");
  const [background, setBackground] = useState("");
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

  console.log('check', !!localStorage.getItem("theme"));

  useEffect(() => {
    if (!!!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark"); setTheme("dark")
    } else {
      setTheme(localStorage.getItem("theme"));
    };
    
    if (!!!localStorage.getItem("clientName")) {
      localStorage.setItem("clientName", "mate"); setClient("mate")
    } else {
      setClient(localStorage.getItem("clientName"));
    };
    
    if (!!!localStorage.getItem("background")) {
      localStorage.setItem("background", "rocks"); setBackground("rocks")
    } else {
      setBackground(localStorage.getItem("background"));
    };
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
          active={panels?.find((panel) => panel.name === "development").active}
          onClickContainer={() => handleOnClickCtnPanel("development")}
          onClose={(e) => handleOnClosePanel(e, "development")}
        />
      )}

      {/* Dock -> fixed */}
      <Dock onClickApp={(app) => handleOnClickApp(app)} />
    </App>
  );
}

export default Application;
