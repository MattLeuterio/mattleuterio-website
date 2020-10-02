import React from 'react';
import classes from './styles.module.scss';
import { motion } from 'framer-motion';
import Layout from '../../../shared/hoc/Layout';

import containerVariants from '../../../shared/containerVariants';

const about = () => {

  return (
    <Layout>
      <motion.div className={classes.About}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >

        <section className={classes.Hello}>
          <div className={classes[`Hello--text`]}>
            <h1>Hello, I'm Matt.</h1>
          </div>
          <div className={classes[`Hello--img-container`]}>
            <img src="./img/matt-leuterio.png" alt="Matt Leuterio"/>
          </div>
        </section>

        <section className={classes.Summary}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorum vel, porro itaque pariatur atque distinctio! Eaque saepe possimus neque, aspernatur tenetur laboriosam dolore consequuntur accusamus, quia ratione labore magnam eligendi? Debitis magnam repellendus porro similique et, amet nesciunt quis itaque sit corrupti sequi incidunt in iure harum doloremque, dicta temporibus. Exercitationem delectus laborum laboriosam voluptates dolorum ex perferendis voluptatibus amet iste temporibus suscipit quis tempora officiis nobis, qui quasi harum, eum ducimus, officia vel quibusdam dolore accusantium. Facere autem quod esse quibusdam a doloremque repudiandae qui perferendis minima maxime necessitatibus, at, et nulla commodi repellendus rerum eligendi earum quas numquam modi! Ipsa iusto, dolores minima a maiores quibusdam et nihil exercitationem omnis accusantium!
          </p>
        </section>


        
        
      </motion.div>
    </Layout>
  )
}


export default about;