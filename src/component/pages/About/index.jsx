import React from "react";
import classes from "./styles.module.scss";
import { motion } from "framer-motion";
import Layout from "../../../shared/hoc/Layout";

import containerVariants from "../../../shared/containerVariants";

const about = () => {
  return (
    <Layout>
      <motion.div
        className={classes.About}
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
            <img src="./img/matt-leuterio.png" alt="Matt Leuterio" />
          </div>
        </section>

        <section className={classes.Summary}>
          <p>Ambitious and curious, I am a technology and coding enthusiast.</p>
          <p>
            I love seeing my creations take shape and I am open to discussions
            and suggestions in order to improve every detail. All this gave
            birth to my passion for the front-end and the user experience.
          </p>
          <p>
            I worked as a videomaker, trying every day to improve myself both as
            a person and as a professional and refining my skills I got to work
            on the production of a documentary in New York.
          </p>
          <p>I enjoy challenges and the clean and efficient code.</p>
        </section>
      </motion.div>
    </Layout>
  );
};

export default about;
