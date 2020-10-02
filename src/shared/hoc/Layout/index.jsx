import React from 'react';
import classes from './styles.module.scss';

import Header from './Header';
import FooterNav from './FooterNav';
import MobileNav from './MobileNav';

const Layout = (props) => {



  return (
    <div className={classes.Layout}>
      <Header />

      <main>
          {props.children}
      </main>

      <FooterNav />
     
      <MobileNav />
    </div>
  )
}


export default Layout;