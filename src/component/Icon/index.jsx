import React from 'react';
import classes from './styles.module.scss';
import { motion } from "framer-motion";

const icon = (props) => {
  return (
    <div className={classes[`Ctn-icon`]}>
      <div className={classes[`Ctn-icon--img`]}>
        <motion.img
          className={classes.Icon} 
          src={props.iconPath} 
          alt={props.iconName}
          initial={{scale: 1}}
          whileHover={{
            scale: 1.2,
            transition: { duration: .4 },
          }}
          />
      </div>

      <div className={classes[`Ctn-icon--name`]}>
        <h2>{props.iconName}</h2>
      </div>
    </div>

  )
}


export default icon;