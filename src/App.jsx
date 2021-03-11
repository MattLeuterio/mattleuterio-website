import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./ui/scss/App.scss";
import { AnimatePresence, motion } from "framer-motion";

// Pages Components
import { Contacts, Home, Profile, Projects } from "./pages";
import { GlobalLayout } from "./components";
// import About from "./component/pages/About";
// import Skills from "./component/pages/Skills";
// import Projects from "./component/pages/Projects";
// import SingleProject from "./component/pages/Projects/SingleProject";
// import Contacts from "./component/pages/Contacts";

function App() {
  const location = useLocation();

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const thumbnailVariants = {
    hidden: {
      transform: "translateY(100%)",
      transition: { duration: 0.6 },
    },
    visible: {
      transform: "translateY(0%)",
      transition: { duration: 0.6 },
    },
    exit: {
      transform: "translateX(-100%)",
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <GlobalLayout
          as={motion.div}
          variants={thumbnailVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Switch location={location} key={location.key}>
            {/* <Route path="/projects/filmmaking/:id" component={SingleProject} /> */}
            {/* <Route path="/projects/development/:id" component={SingleProject} /> */}
            <Route path="/profile" component={Profile} />
            <Route path="/projects" component={Projects} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/" component={Home} />
          </Switch>
        </GlobalLayout>
      </AnimatePresence>
    </div>
  );
}

export default App;
