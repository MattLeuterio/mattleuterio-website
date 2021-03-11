import React from 'react';
import PropTypes from 'prop-types';
import Typeface, { TypefaceInterface } from './index';
import { FontBase } from '../../const';
import theme from '../theme';

const baseConfig = {
  color: 'unset',
  fontFamily: theme.fontset.helvetica,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 1.3,
  letterSpacing: 'unset',
  fontSize: FontBase
};

const types = {
  italic: {
    fontStyle: 'italic'
  },
  bold: {
    fontWeight: 700
  },
  boldItalic: {
    fontStyle: 'italic',
    fontWeight: 700
  },
  h1: {
    fontSize: 21,
    fontWeight: 400
  },
  h2: {
    fontSize: 18,
    fontWeight: 400
  },
  h3: {
    fontSize: 14,
    lineHeight: 1.14
  },
  headerMenuElements: {
    fontSize: 16
  },
  footerMenuElements: {
    fontSize: 28
  },
  mobileMenuElements: {
    fontSize: 24,
    fontWeight: 700
  },
  carouselTitle: {
    fontSize: 20,
    letterSpacing: '5px'
  },
  carouselSubtitle: {
    fontSize: 12,
    fontWeight: 700,
  },
  gamePageSectionTitle: {
    fontSize: 27,
    fontWeight: 700,
    color: `${theme.colors.primary.primary}`,
  },
  gamePageStoreLabel: {
    fontSize: 14,
  },
}  


const Helvetica = ({
  type, configuration, children, htmlAttribute, onClick
}) => <Typeface htmlAttribute={htmlAttribute} configuration={{ ...baseConfig, ...types[type], ...configuration }} onClick={onClick}>{children}</Typeface>;

Helvetica.propTypes = {
  htmlAttribute: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.keys(types)),
  configuration: TypefaceInterface,
  onClick: PropTypes.func
};

export default Helvetica;