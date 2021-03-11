import React from "react";

import { BackgroundLogo, PageContainer } from "./style";
import { Header } from "..";
import { Image } from "../../atoms";
import Logo from "../../ui/assets/img/logo.png";
import { motion } from "framer-motion";

const GlobalLayout = ({ children }) => {
  const thumbnailVariants = {
    hidden: { opacity: 0, transform: "translateY(-100%)" },
    visible: {
      opacity: 1,
      transform: "translateY(0%)",
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      transform: "translateY(100%)",
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };
  return (
    <>
      <Header />
      <PageContainer
        as={motion.div}
        variants={thumbnailVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </PageContainer>
    </>
  );
};

export default GlobalLayout;
