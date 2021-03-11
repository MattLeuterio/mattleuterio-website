import React from "react";
import ImageMatflix from "../../ui/assets/img/matflix.png";
import ImageFTE from "../../ui/assets/img/fte.png";

import { Container, Hello } from "./style";
import { HelmetMeta, Image } from "../../atoms";
import { motion } from "framer-motion";

const Home = () => {
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
    <Container
      as={motion.div}
      variants={thumbnailVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HelmetMeta
        titlePage="Just Games | Home"
        path="www.justgames.com"
        description="Just Games. Find your next great game."
      />
      <Hello>Hello there</Hello>
    </Container>
  );
};

export default Home;
