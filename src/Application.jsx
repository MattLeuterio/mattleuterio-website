import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { App } from "./appStyles";
// Pages Components
import { Contacts, Home, Profile, Projects } from "./pages";
import { GlobalLayout, Header } from "./components";
import { selectTheme } from "./features/settings/settingsSlice";

function Application() {
  const location = useLocation();
  const themes = useSelector(selectTheme);
  const [theme, setTheme] = useState(themes);
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
    theme === 'dark' ? setTheme('light') : setTheme('dark');
    console.log('click');
  }
  console.log(theme)

  return (
      <App theme={theme}>
        <AnimatePresence exitBeforeEnter>
          {/* <GlobalLayout
            as={motion.div}
            variants={thumbnailVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          > 
          </GlobalLayout> */}
          <Header theme={theme}/>
          <div style={{paddingTop: '200px'}} onClick={() => handleOnClickThemeToggle()}>theme toggle</div>
        </AnimatePresence>
      </App>
  );
}

export default Application;
