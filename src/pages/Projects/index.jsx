import React from "react";

import { Container } from "./style";
import { HelmetMeta } from "../../atoms";
import { motion } from "framer-motion";

const Projects = () => {
  const thumbnailVariants = {
    hidden: { transform: "translateY(-100%)", transition: { duration: 0.6 } },
    visible: {
      opacity: 1,
      transform: "translateY(0%)",
      transition: { duration: 0.6 },
    },
    exit: {
      transform: "translateY(-100%)",
      transition: { duration: 0.6 },
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
      Projects
    </Container>
  );
};

export default Projects;
