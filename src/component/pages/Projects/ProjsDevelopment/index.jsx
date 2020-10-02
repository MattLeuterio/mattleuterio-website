import React from 'react';
import { NavLink} from "react-router-dom";
import classes from './styles.module.scss';

import listProjs from '../../../../data.json';

const ProjsDevelopment = () => {

  return (
    <section className={classes[`Projs-dev`]}>
      {
        listProjs.projects.dev.map((dev) => {
          return (
            <React.Fragment key={dev.id}>
              <div className={classes.Card}>
                <img className={classes[`Card-img`]} src={dev.mainImg} alt={dev.title} />
                <NavLink to={"/projects/development/" + dev.id} className={classes[`Card-title--wrap`]}>
                  <h2 className={classes[`Card-title--wrap-text`]}>{dev.title}</h2>
                </NavLink>
              </div>
            </React.Fragment>

            )
          })
        }
    </section>
  )
}


export default ProjsDevelopment;