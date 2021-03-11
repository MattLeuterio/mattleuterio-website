import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image } from "../../atoms";
import Logo from "../../ui/assets/img/logo.png";
import { Container, Name, Nav } from "./style";

const Header = () => {
  return (
    <Container>
      <Name>
        <Link to="/">Matt Leuterio</Link>
      </Name>
      <Link to="/">
        <Image src={Logo} width="50px" />
      </Link>
      <Nav>
        <Link to="/projects">Projects</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contacts">Contacts</Link>
      </Nav>
    </Container>
  );
};

Header.propTypes = {
  titlePage: PropTypes.string,
  path: PropTypes.string,
};

export default Header;
