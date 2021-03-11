import React from "react";

import { Container } from "./style";
import { HelmetMeta } from "../../atoms";
import { motion } from "framer-motion";

const Profile = () => {
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
  return (
    <Container
      as={motion.div}
      variants={thumbnailVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HelmetMeta
        titlePage="Matt | Profile"
        path="www.mattleuterio.dev/profile"
        description="Just Games. Find your next great game."
      />
      Profile
    </Container>
  );
};

export default Profile;
