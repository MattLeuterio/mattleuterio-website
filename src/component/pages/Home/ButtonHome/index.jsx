import React from 'react';
import classes from './styles.module.scss';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const animationButton = {
  hidden: { 
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: .7, delay: .8},
  }
}

const buttonHome = () => {
  return (
    <motion.div className={classes.Button}
      variants={animationButton}
      initial="hidden"
      animate="visible"
    >
        <Link to="/about">
          START
        </Link>
    </motion.div>
  )
}


export default buttonHome;