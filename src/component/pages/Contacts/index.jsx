import React from 'react';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';

import Layout from '../../../shared/hoc/Layout';
import SocialContacts from '../../../shared/hoc/Layout/Header/SocialContacts';
import containerVariants from '../../../shared/containerVariants';

const contacts = () => {

  return (
    <Layout>
      <motion.div className={classes.Contacts}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >

        <section className={classes.Text}>
            <h1>Get in touch.</h1>
        </section>

        <section className={classes.Icons}>
          <div className={classes[`Icons--email`]}>
            <div className={classes[`Icons--email-icon`]}>
              <img src={ window.location.origin + "/img/icon-email.png" } alt="email"/>
            </div>
            <div className={classes[`Icons--email-txt`]}>
              <motion.a 
                href="mailto: matteoleuterio@gmail.com"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{
                  color: "#3969F6"
                }}
                >Send Email</motion.a>
            </div>
          </div>
          <div className={classes[`Icons--social`]}>
            <SocialContacts />
          </div>
        </section>
      </motion.div>
    </Layout>
  )
}


export default contacts;