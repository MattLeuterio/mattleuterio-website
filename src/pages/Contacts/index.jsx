import React from "react";

import { Container } from "./style";
import { HelmetMeta } from "../../atoms";

const Contacts = () => {
  return (
    <Container>
      <HelmetMeta
        titlePage="Just Games | Home"
        path="www.justgames.com"
        description="Just Games. Find your next great game."
      />
      Contacts
    </Container>
  );
};

export default Contacts;
