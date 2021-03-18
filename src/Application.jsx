import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { App } from "./appStyles";

import Bg from "./ui/assets/img/backgrounds/dark/bg-rocks-dark.jpg";

// Layout Components
import { Header } from "./components";

function Application() {
  const initialTheme = !!localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "dark";
  const [theme, setTheme] = useState(initialTheme);

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
  console.log(theme);

  return (
    <App background={Bg} theme={theme}>
      {/* <GlobalLayout
            as={motion.div}
            variants={thumbnailVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          > 
          </GlobalLayout> */}
      <Header theme={theme} />
      <div
        style={{ paddingTop: "200px" }}
        onClick={() => handleOnClickThemeToggle()}
      >
        theme toggle
      </div>
    </App>
  );
}

export default Application;
