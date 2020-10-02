import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './shared/sass/App.scss';

// Pages Components
import Home from './component/pages/Home';
import About from './component/pages/About';
import Skills from './component/pages/Skills';
import Projects from './component/pages/Projects';
import SingleProject from './component/pages/Projects/SingleProject';
import Contacts from './component/pages/Contacts';

// Resolve bug's height on Mobile Device
// I need this only on Mobile Device
const deviceWidth = window.innerWidth;
if (deviceWidth < 577) {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}



function App() {
  const location = useLocation();

  return (

    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/projects/filmmaking/:id" component={SingleProject} />
          <Route path="/projects/development/:id" component={SingleProject} />
          <Route path="/about" component={About} />
          <Route path="/skills/" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/" component={Home} />
        </Switch> 
      </AnimatePresence>
    </div>

  );

}

export default App;
