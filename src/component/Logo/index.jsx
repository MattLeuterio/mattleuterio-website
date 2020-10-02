import React from 'react';
import classes from './styles.module.scss';
import { motion } from "framer-motion";

/**
* @author
* @function pattern
**/

const logo = () => {
  return (
    <>
      <motion.img 
        className={classes[`Logo-hover`]} 
        src="./img/logo.png" 
        alt="Matt Leuterio Logo"
        initial={{opacity: 0}}
        whileHover={{
          opacity: 1,
          transition: { duration: .6 },
        }}
        />
      <img 
        className={classes.Logo} 
        src="./img/logo-border.png" 
        alt="Matt Leuterio Logo"
        />
    </>

  )
}


export default logo;