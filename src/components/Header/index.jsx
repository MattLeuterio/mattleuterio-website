import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image } from "../../atoms";
import Logo from "../../ui/assets/img/header-logo-white.png";
import {
  BackgroundBlur,
  Container,
  LeftCtn,
  Name,
  Nav,
  RightCtn,
} from "./style";

const Header = ({ theme }) => {
  return (
    <>
      <Container theme={theme}>
        <LeftCtn>
          <Image src={Logo} width="24px" />
          <Name>Matt Leuterio</Name>
        </LeftCtn>
        <RightCtn>
          <Nav>
            <Link to="/projects">Projects</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contacts">Contacts</Link>
          </Nav>
        </RightCtn>
        <BackgroundBlur />
      </Container>
    </>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default Header;
