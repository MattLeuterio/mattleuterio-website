import React from 'react';
import PropTypes from 'prop-types';
import Typeface, { TypefaceInterface } from './index';
import { FontBase } from '../../const';
import theme from '../theme';

const baseConfig = {
  color: 'unset',
  fontFamily: theme.fontset.roboto,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 1,
  letterSpacing: 'unset',
  fontSize: FontBase
};

const types = {
  italic: {
    fontStyle: 'italic'
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
    fontSize: 14
  },
  h4: {
    fontSize: 13
  },
  vscReadme: {
    fontSize: 12
  }
}  


const Roboto = ({
  type, configuration, style, children, htmlAttribute, onClick, className
}) => <Typeface className={className} htmlAttribute={htmlAttribute} configuration={{ ...baseConfig, ...types[type], ...configuration }} style={style} onClick={onClick}>{children}</Typeface>;

Roboto.propTypes = {
  htmlAttribute: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.keys(types)),
  configuration: TypefaceInterface,
  onClick: PropTypes.func
};

export default Roboto;