import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { App, Welcome } from "./appStyles";

import Bg from "./ui/assets/img/backgrounds/dark/bg-rocks-dark.jpg";

// Layout Components
import { Dock, Header } from "./components";
import { Settings } from "./components/Panels";
import { useDispatch, useSelector } from "react-redux";
import {
  openPanel,
  panelsSlice,
  selectPanels,
  setPanelActive,
} from "./features/panels/panelsSlice";

const initialTheme = !!localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "dark";

const initialClient = !!localStorage.getItem("clientName")
  ? localStorage.getItem("clientName")
  : "mate";

function Application() {
  const dispatch = useDispatch();
  const panels = useSelector(selectPanels);
  const [theme, setTheme] = useState(initialTheme);
  const [client, setClient] = useState(initialClient);
  const constraintsRef = useRef(null);

  useEffect(() => {}, []);

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

  const handleOnClickThemeToggle = () => {
    localStorage.getItem("theme") === "dark"
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");

    setTheme(localStorage.getItem("theme"));
  };
  //console.log(theme);

  const handleOnClickCtnPanel = (name) => {
    dispatch(setPanelActive(name));
  };

  const handleOnClickApp = (app) => {
    console.log("app", app);
    dispatch(openPanel(app));
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
    <App ref={constraintsRef} as={motion.div} background={Bg} theme={theme}>
      <Header />
      <Welcome>Welcome, {client}</Welcome>

      {panels?.find((panel) => panel.name === "settings").open && (
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragElastic={0}
          dragMomentum={false}
          style={{
            position: "absolute",
            width: "675px",
            height: "381px",
            top: "150px",
            right: "50px",
          }}
        >
          <Settings
            onClickContainer={() => handleOnClickCtnPanel("settings")}
            onClickThemeToggle={() => handleOnClickThemeToggle()}
          />
        </motion.div>
      )}
      {/* Dock -> fixed */}
      <Dock onClickApp={(app) => handleOnClickApp(app)} theme={theme} />
    </App>
  );
}

export default Application;
