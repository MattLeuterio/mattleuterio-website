import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../atoms";
import { Container } from "./style";
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

const Dock = ({ mediaIsPhone }) => {
  return (
    <Container>
      <Image src={IconMail} width="76px" />
      <Image src={IconVSC} width="76px" />
      <Image src={IconYoutube} width="76px" />
      <Image src={IconNote} width="76px" />
      <Image src={IconSettings} width="76px" />
      <Image src={IconTrash} width="76px" />
    </Container>
  );
};

Dock.propTypes = {
  theme: PropTypes.string,
};

export default withMediaQueries(Dock);
