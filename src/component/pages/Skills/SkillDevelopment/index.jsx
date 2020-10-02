import React from 'react';
import classes from './styles.module.scss';

import Icon from '../../../Icon';
import listIcons from '../../../../data.json';



const skillDevelopment = () => {

  return (
    <section className={classes[`Skills-dev`]}>
          {
            listIcons.skills.dev.map((dev, index) => {
              return (
                <Icon key={index} iconPath={window.location.origin + dev.path} iconName={dev.name} />
              )
            })
          }
    </section>
  )
}


export default skillDevelopment;