import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';
import Layout from '../../../shared/hoc/Layout';


import containerVariants from '../../../shared/containerVariants';
import ProjsDevelopment from './ProjsDevelopment';
import ProjsFilmmaking from './ProjsFilmmaking';



const projects = () => {

  return (
    <Layout>
      <motion.div className={classes.Projects}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <nav>
          <NavLink activeClassName={classes.active} to="/projects/development">Development</NavLink>
          <NavLink activeClassName={classes.active} to="/projects/filmmaking">Filmmaking</NavLink>
        </nav>
        <Switch>
          <Route path="/projects/development" component={ProjsDevelopment} />
          <Route path="/projects/filmmaking" component={ProjsFilmmaking} />
        </Switch>

      </motion.div>
    </Layout>
  )
}


export default projects;