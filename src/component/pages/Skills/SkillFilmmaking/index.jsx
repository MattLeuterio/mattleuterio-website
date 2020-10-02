import React from 'react';
import classes from './styles.module.scss';

import Icon from '../../../Icon';
import listIcons from '../../../../data.json';



const skillFilmmaking = () => {

  return (
    <section className={classes[`Skills-film`]}>
      {
        listIcons.skills.film.map((dev, index) => {
          return (
            <Icon key={index} iconPath={dev.path} iconName={dev.name} />
            )
          })
        }
    </section>
  )
}


export default skillFilmmaking;