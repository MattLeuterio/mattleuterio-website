import React from 'react';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';
import Layout from '../../../shared/hoc/Layout';

import containerVariants from '../../../shared/containerVariants';

const error404 = () => {

  return (
    <Layout>
      <motion.div className={classes.Error404}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >

        <h1>ERROR 404</h1>
        <h3>Page Not Found</h3>

        
        
      </motion.div>
    </Layout>
  )
}


export default error404;