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
          <p>Ambizioso e curioso, amante della tecnologia e del codice.</p>
          <p>
            Amo vedere le mie creazioni prendere forma e discuterne con le
            persone per migliorarne ogni dettaglio. Tutto ciò ha contribuito a
            far nascere in me la passione per il front-end e la user experience.
          </p>
          <p>
            Ho lavorato come Videomaker cercando ogni giorno di migliorarmi sia
            come persona che come professionista ed affinando le mie skills sono
            arrivato a lavorare alla produzione di un documentario a New York.
          </p>
          <p>Adoro le sfide ed il codice pulito ed efficiente.</p>
        </section>
      </motion.div>
    </Layout>
  );
};

export default about;
