import React from 'react';
import { NavLink} from "react-router-dom";
import classes from './styles.module.scss';

import listProjs from '../../../../data.json';

const ProjsFilmmaking = () => {

  return (
    <section className={classes[`Projs-film`]}>
      {
        listProjs.projects.film.map((film) => {
          return (
            <React.Fragment key={film.id}>
              <div className={classes.Card}>
                <img className={classes[`Card-img`]} src={film.mainImg} alt={film.title} />
                <NavLink to={{search: 'f', pathname: "/projects/filmmaking/" + film.id}} className={classes[`Card-title--wrap`]}>
                  <h2 className={classes[`Card-title--wrap-text`]}>{film.title}</h2>
                </NavLink>
              </div>
            </React.Fragment>

            )
          })
        }
    </section>
  )
}


export default ProjsFilmmaking;