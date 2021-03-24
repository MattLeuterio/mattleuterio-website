import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../atoms";
import { Container, IconApp } from "./style";
import {
  IconMail,
  IconNote,
  IconSettings,
  IconTrash,
  IconVSC,
  IconYoutube,
} from "../../ui/assets/img/icons";
import { withMediaQueries } from "../../hoc/withMediaQueries";
import { useDispatch, useSelector } from "react-redux";
import { selectPanels } from "../../features/panels/panelsSlice";

const Dock = ({ mediaIsPhone, theme, onClickApp }) => {
  const panels = useSelector(selectPanels);
  return (
    <Container theme={theme}>
      {!mediaIsPhone && (
        <a href="matteoleuterio@gmail.com">
          <IconApp name="Mail">
            <Image src={IconMail} width="60px" />
          </IconApp>
        </a>
      )}
      <IconApp
        open={panels?.find((panel) => panel.name === "development").open}
        onClick={() => onClickApp("development")}
        name="Development"
      >
        <Image src={IconVSC} width="60px" />
      </IconApp>
      <IconApp
        open={panels?.find((panel) => panel.name === "filmmaking").open}
        onClick={() => onClickApp("filmmaking")}
        name="Filmmaking"
      >
        <Image src={IconYoutube} width="60px" />
      </IconApp>

      {!mediaIsPhone && (
        <IconApp
          open={panels?.find((panel) => panel.name === "profile").open}
          onClick={() => onClickApp("profile")}
          name="Profile"
        >
          <Image src={IconNote} width="60px" />
        </IconApp>
      )}
      <IconApp
        open={panels?.find((panel) => panel.name === "settings").open}
        onClick={() => onClickApp("settings")}
        name="Settings"
      >
        <Image src={IconSettings} width="60px" />
      </IconApp>

      <IconApp
        open={panels?.find((panel) => panel.name === "trash").open}
        onClick={() => onClickApp("trash")}
        name="Trash"
      >
        <Image src={IconTrash} width="60px" />
      </IconApp>
    </Container>
  );
};

Dock.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Dock);
