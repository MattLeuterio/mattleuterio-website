import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './styles.module.scss';


const MobileNav = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  
  const showMobileMenu = () => setMobileMenu(!mobileMenu);

  return (
    <>
    <div className={mobileMenu ? classes.MobileNav + " " + classes.Open : classes.MobileNav}
    >
      <nav>
        <NavLink onClick={showMobileMenu} to="/about" activeClassName={classes.active}>About</NavLink>
        <NavLink onClick={showMobileMenu} to="/skills/development" activeClassName={classes.active}>Skills</NavLink>
        <NavLink onClick={showMobileMenu} to="/projects/development" activeClassName={classes.active}>Projects</NavLink>
        <NavLink onClick={showMobileMenu} to="/contacts" activeClassName={classes.active}>Contacts</NavLink>
      </nav>
    </div>

    <button className={mobileMenu ? classes.Button + ' ' + classes.OpenBtn : classes.Button} onClick={showMobileMenu}>
        <img src={window.location.origin + "/img/menu-icon.png"} alt="Nav Mobile"/>
    </button>

    <button className={!mobileMenu ? classes.Button + ' ' + classes.OpenBtn : classes.Button} onClick={showMobileMenu}>
        <img src={window.location.origin + "/img/close-icon.png"} alt="Nav Mobile"/>
    </button>
    </>
  )
}


export default MobileNav;