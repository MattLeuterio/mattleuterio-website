import React from 'react';
import { useParams } from "react-router";
import classes from './styles.module.scss';
import { motion } from 'framer-motion';
import Layout from '../../../../shared/hoc/Layout';


import containerVariants from '../../../../shared/containerVariants';
import listProjs from '../../../../data.json';



const SingleProject = () => {
  const {id} = useParams();

  let projs = "";
  console.log(id)
  document.location.search === "?f" ? projs = listProjs.projects.film : projs = listProjs.projects.dev;
  
  return (
    <Layout>
      <motion.div className={classes.SingleProject}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
      {
        // eslint-disable-next-line
        projs.map((dev) => dev.id == id && (
              <React.Fragment key={dev.id}>
                <div className={classes[`SingleProject-title`]}>
                  <h1>{dev.title}</h1>
                </div>
                <div className={classes[`SingleProject-cover`]}>
                  <img src={dev.mainImg} alt={dev.title} />
                </div>
                <div className={classes[`SingleProject-info`]}>
                  <div className={classes[`SingleProject-info--tech`]}>
                    <h3>Tech</h3>
                    <ul>
                      {
                        dev.tech.map( (tech, index) => {
                          return <li key={index}>{tech}</li>
                        })
                      }
                    </ul>
                  </div>
                  <div className={classes[`SingleProject-info--content`]}>
                    <div className={classes[`SingleProject-info--content-description`]}>
                      <h3>Description</h3>
                      <p>{dev.content}</p>
                    </div>
                    <div className={classes[`SingleProject-info--content-links`]}>
                      <h3>Links</h3>
                      <div className={classes[`SingleProject-info--content-links--list`]}>
                        {
                          dev.links.map( (link, index) => (
                          <motion.a 
                            key={index} 
                            href={link[1]} 
                            target="_blank"
                            whileHover={{
                              backgroundColor: "#B740F0"
                            }}
                            >
                              {link[0]}
                            </motion.a>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment >
            )
        )
      }
      </motion.div>
    </Layout>
  )
}



export default SingleProject;