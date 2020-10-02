import React from 'react';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';

const socialContacts = () => {
  return (
    <div className={classes.SocialContacts}>
      <a href="https://www.linkedin.com/in/matteo-leuterio-7b3b4641/" target="_blank" rel="noopener noreferrer">
        <motion.img whileHover={{scale: 1.2}} src={window.location.origin + "/img/social/linkedin.png"} alt="Linkedin"/>
      </a>
      <a href="https://www.instagram.com/matt.leuterio/" target="_blank" rel="noopener noreferrer">
        <motion.img whileHover={{scale: 1.2}} src={window.location.origin + "/img/social/instagram.png"} alt="Instagram"/>
      </a>
      <a href="https://github.com/MattLeuterio" target="_blank" rel="noopener noreferrer">
        <motion.img whileHover={{scale: 1.2}} src={window.location.origin + "/img/social/github.png"} alt="GitHub"/>
      </a>
    </div>
  )
}


export default socialContacts;