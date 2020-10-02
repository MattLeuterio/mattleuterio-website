import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';

import SocialContacts from './SocialContacts';

const animationHeader = {
  hidden: { 
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: { duration: .7, delay: .4},
  },
  exit: {
    y: "-100%",
    transition: { duration: .2}
  }
}

const header = () => {
  return (
    <motion.header className={classes.Header}
    variants={animationHeader}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      {/* Logo */}
      <Link to="/">
        <img 
        className={classes.Logo} 
        src={window.location.origin + "/img/logo-border.png"} 
        alt="Matt Leuterio Logo"
        />
      </Link>

      {/* Social Profiles */}
      <SocialContacts />
    </motion.header>
  )
}


export default header;