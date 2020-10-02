import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';

const animationNav = {
  hidden: { 
    y: "100%",
  },
  visible: {
    y: 0,
    transition: { duration: .7, delay: .4},
  },
  exit: {
    y: "100%",
    transition: { duration: .2}
  }
}

const footerNav = () => {
  return (
    <>
    <motion.div className={classes.FooterNav}
    variants={animationNav}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
      <nav>
        <NavLink to="/about" activeClassName={classes.active}>About</NavLink>
        <NavLink to="/skills/development" activeClassName={classes.active}>Skills</NavLink>
        <NavLink to="/projects/development" activeClassName={classes.active}>Projects</NavLink>
        <NavLink to="/contacts" activeClassName={classes.active}>Contacts</NavLink>
      </nav>
    </motion.div>
    </>
  )
}


export default footerNav;