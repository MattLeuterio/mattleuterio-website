import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  App, AppsContainer,
  Welcome, IconApp
} from "./appStyles";
import { backgroundChoice } from "./utils";
import { Login } from "./pages";

// Layout Components
import { Dock, Header } from "./components";
import { About, Development, Filmmaking, Profile, Settings, Trash } from "./components/Panels";
import { useDispatch, useSelector } from "react-redux";
import {
  openPanel,
  closePanel,
  selectPanels,
  setPanelActive,
} from "./features/panels/panelsSlice";
import {withMediaQueries} from "./hoc/withMediaQueries";
import {Image} from "./atoms";
import {IconMail, IconNote} from "./ui/assets/img/icons";

function Application({ mediaIsPhone, mediaIsTablet }) {
  const dispatch = useDispatch();
  const panels = useSelector(selectPanels);
  const [theme, setTheme] = useState("");
  const [client, setClient] = useState("");
  const [background, setBackground] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const constraintsRef = useRef(null);

  useEffect(() => {
    if (!!!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      setTheme(localStorage.getItem("theme"));
    }

    if (!!!localStorage.getItem("clientName")) {
      localStorage.setItem("clientName", "mate");
      setClient("mate");
    } else {
      setClient(localStorage.getItem("clientName"));
    }

    if (!!!localStorage.getItem("background")) {
      localStorage.setItem("background", "rocks");
      setBackground("rocks");
    } else {
      setBackground(localStorage.getItem("background"));
    }
  }, []);

  useEffect(() => {
    if (!!sessionStorage.getItem("isLogged")) {
      localStorage.setItem("isLogged", true);
      setIsLogged(true);
    }
  }, []);

  const handleOnClickTheme = (selected) => {
    const actual = localStorage.getItem("theme");
    if (selected !== actual) {
      selected === "dark"
        ? localStorage.setItem("theme", "dark")
        : localStorage.setItem("theme", "light");

      setTheme(localStorage.getItem("theme"));
    }
  };

  const handleOnClickCtnPanel = (name) => {
    dispatch(setPanelActive(name));
  };

  const handleOnClickApp = (app) => {
    dispatch(openPanel(app));
    if(!mediaIsPhone && !mediaIsTablet) {
      const panel = document.querySelector(`#panel-${app}`);
      if (Boolean(panel) && Boolean(localStorage.getItem(`position-panel-${app}`))) {
        panel.style.transform = localStorage.getItem(`position-panel-${app}`);
      }
    }
  };

  const handleOnClosePanel = (e, app) => {
    e.stopPropagation();
    const panel = document.querySelector(`#panel-${app}`);
    if (Boolean(panel)) {
      const transform = panel.style.transform;
      if (Boolean(transform)) localStorage.setItem(`position-panel-${app}`, transform);
    }
    dispatch(closePanel(app));
  };

  const handleOnChangeName = (value) => {
    localStorage.setItem("clientName", value);
    setClient(value);
  };

  const handleOnChangeBackground = (value) => {
    localStorage.setItem("background", value);
    setBackground(value);
  };

  const handleOnKeyPressEnter = (e) => {
    const newValue = e.target.value;
    if (e.key === "Enter" && newValue.length > 0) {
      localStorage.setItem("clientName", newValue);
      sessionStorage.setItem("isLogged", true);
      setClient(newValue);
      setIsLogged(true);
    }
  };

  const handleOnClickIconSetName = (e) => {
    const newValue = e.target.value;
    localStorage.setItem("clientName", newValue);
    setClient(newValue);
  };

  const handleOnClickIconNameLogin = () => {
    if (client.length > 0) {
      localStorage.setItem("clientName", client);
      sessionStorage.setItem("isLogged", true);
      setClient(client);
      setIsLogged(true);
    }
  };

  return (
    <>
      {isLogged ? (
        <App
          ref={constraintsRef}
          as={motion.div}
          background={backgroundChoice(theme, background)}
          theme={theme}
        >
          <Header theme={theme} />
          <Welcome>Welcome, {client}</Welcome>

          {/* Mobile */}
          {(mediaIsPhone || mediaIsTablet) && (
              <AppsContainer>
                <a href="mailto:matteoleuterio@gmail.com" target="_blank" rel="noopener noreferrer">
                  <IconApp name="Mail">
                    <Image src={IconMail} width="60px" />
                  </IconApp>
                </a>
                <IconApp
                    onClick={() => handleOnClickApp('profile')}
                    name="Profile"
                >
                  <Image src={IconNote} width="60px" />
                </IconApp>
              </AppsContainer>
          )}

          {/* SETTINGS PANEL */}
          <Settings
            theme={theme}
            dragConstraints={constraintsRef}
            value={client}
            open={panels?.find((panel) => panel.name === "settings").open}
            active={panels?.find((panel) => panel.name === "settings").active}
            onClickContainer={() => handleOnClickCtnPanel("settings")}
            onClose={(e) => handleOnClosePanel(e, "settings")}
            onClickTheme={(themeChoice) => handleOnClickTheme(themeChoice)}
            onChangeName={(value) => handleOnChangeName(value)}
            onClickIconSetName={(e) => handleOnClickIconSetName(e)}
            onChangeBackground={(value) => handleOnChangeBackground(value)}
            bgSelected={background}
          />

          {/* ABOUT PANEL */}
          <About
            theme={theme}
            dragConstraints={constraintsRef}
            active={panels?.find((panel) => panel.name === "about").active}
            open={panels?.find((panel) => panel.name === "about").open}
            onClickContainer={() => handleOnClickCtnPanel("about")}
            onClose={(e) => handleOnClosePanel(e, "about")}
          />

          {/* PROFILE */}
          <Profile
            theme={theme}
            dragConstraints={constraintsRef}
            active={panels?.find((panel) => panel.name === "profile").active}
            open={panels?.find((panel) => panel.name === "profile").open}
            onClickContainer={() => handleOnClickCtnPanel("profile")}
            onClose={(e) => handleOnClosePanel(e, "profile")}
          />

          {/* TRASH */}
          <Trash
            theme={theme}
            dragConstraints={constraintsRef}
            active={panels?.find((panel) => panel.name === "trash").active}
            open={panels?.find((panel) => panel.name === "trash").open}
            onClickContainer={() => handleOnClickCtnPanel("trash")}
            onClose={(e) => handleOnClosePanel(e, "trash")}
          />

          {/* DEVELOPMENT */}
          <Development
            theme={theme}
            dragConstraints={constraintsRef}
            active={
              panels?.find((panel) => panel.name === "development").active
            }
            open={panels?.find((panel) => panel.name === "development").open}
            onClickContainer={() => handleOnClickCtnPanel("development")}
            onClose={(e) => handleOnClosePanel(e, "development")}
          />

          {/* FILMMAKING */}
          <Filmmaking
            theme={theme}
            dragConstraints={constraintsRef}
            active={
              panels?.find((panel) => panel.name === "filmmaking").active
            }
            open={panels?.find((panel) => panel.name === "filmmaking").open}
            onClickContainer={() => handleOnClickCtnPanel("filmmaking")}
            onClose={(e) => handleOnClosePanel(e, "filmmaking")}
          />

          {/* Dock -> position fixed */}
          <Dock onClickApp={(app) => handleOnClickApp(app)} />
        </App>
      ) : (
        <Login
          background={backgroundChoice(theme, background)}
          theme={theme}
          client={client}
          onChangeName={(e) => handleOnChangeName(e.target.value)}
          onKeyPressEnter={(client) => handleOnKeyPressEnter(client)}
          onClickIconNameLogin={() => handleOnClickIconNameLogin()}
        />
      )}
    </>
  );
}

export default withMediaQueries(Application);
