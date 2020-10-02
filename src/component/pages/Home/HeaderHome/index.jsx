import React from 'react';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';


const animationHeader = {
  hidden: { 
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: .7, delay: .6},
  }
}


const headerHome = () => {
  return (
    <motion.header className={classes.Header}
    variants={animationHeader}
    initial="hidden"
    animate="visible"
    >
      <h1>WEB DEVELOPER</h1>
      <h2>FILMMAKER</h2>
    </motion.header>
  )
}


export default headerHome;