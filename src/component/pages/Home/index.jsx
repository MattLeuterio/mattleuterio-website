import React from 'react';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';

import containerVariants from '../../../shared/containerVariants';
import Logo from '../../Logo';
import HeaderHome from './HeaderHome';
import ButtonHome from './ButtonHome';

const home = () => {
  return (
    <motion.div className={classes.Home}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
      {/* Header with Job Titles */}
      <HeaderHome />

      {/* Logo Matt in the page's middle */}
      <Logo />

      {/* Button for start visiting site */}
      <ButtonHome />

    </motion.div>
  )
}


export default home;