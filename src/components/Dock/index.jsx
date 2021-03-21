import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../atoms";
import { Container, IconApp } from "./style";
// using Moment.js
import {
  IconMail,
  IconNote,
  IconSettings,
  IconTrash,
  IconVSC,
  IconYoutube,
} from "../../ui/assets/img/icons";
import { withMediaQueries } from "../../hoc/withMediaQueries";

const Dock = ({ mediaIsPhone, name }) => {
  return (
    <Container>
      {!mediaIsPhone && (
        <IconApp name="Mail">
          <Image src={IconMail} width="76px" />
        </IconApp>
      )}
      <IconApp name="Development">
        <Image src={IconVSC} width="76px" />
      </IconApp>
      <IconApp name="Filmmaking">
        <Image src={IconYoutube} width="76px" />
      </IconApp>

      {!mediaIsPhone && (
        <IconApp name="Profile">
          <Image src={IconNote} width="76px" />
        </IconApp>
      )}
      <IconApp name="Settings">
        <Image src={IconSettings} width="76px" />
      </IconApp>

      <IconApp name="Trash">
        <Image src={IconTrash} width="76px" />
      </IconApp>
    </Container>
  );
};

Dock.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Dock);
