import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { App, Welcome } from "./appStyles";

import Bg from "./ui/assets/img/backgrounds/dark/bg-rocks-dark.jpg";

// Layout Components
import { Dock, Header } from "./components";

const initialTheme = !!localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "dark";

function Application() {
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
  console.log(!!localStorage.getItem("clientName"));

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
      <Header />

      <Welcome>
        Welcome,{" "}
        {!!localStorage.getItem("clientName")
          ? localStorage.getItem("clientName")
          : "mate"}
      </Welcome>

      {/* Dock -> fixed */}
      <Dock />

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
