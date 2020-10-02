import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';
import Layout from '../../../shared/hoc/Layout';


import containerVariants from '../../../shared/containerVariants';
import SkillDevelopment from './SkillDevelopment';
import SkillFilmmaking from './SkillFilmmaking';



const skills = () => {

  return (
    <Layout>
      <motion.div className={classes.Skills}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <nav>
          <NavLink activeClassName={classes.active} to="/skills/development">Development</NavLink>
          <NavLink activeClassName={classes.active} to="/skills/filmmaking">Filmmaking</NavLink>
        </nav>
        
          <Route path="/skills/development" component={SkillDevelopment} />
          <Route path="/skills/filmmaking" render={SkillFilmmaking} />

      </motion.div>
    </Layout>
  )
}


export default skills;