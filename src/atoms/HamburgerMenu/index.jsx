import React from 'react';
import PropTypes from 'prop-types';
import { Container, HamburgerIcon } from './style';

const HamburgerMenu = ({ open, onClick, theme }) => (
  <Container onClick={onClick}>
    <HamburgerIcon theme={theme} open={open} />
  </Container>
);

HamburgerMenu.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool
};

export default HamburgerMenu;
