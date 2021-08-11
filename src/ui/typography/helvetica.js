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
  vscNoPanelTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#252525'
  },
  vscNoPanelSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#252525'
  },
  VscTitleContent: {
    fontSize: 13,
    color: '#252525'
  }
}  


const Helvetica = ({
  type, configuration, style, children, htmlAttribute, onClick
}) => <Typeface htmlAttribute={htmlAttribute} configuration={{ ...baseConfig, ...types[type], ...configuration }} style={style} onClick={onClick}>{children}</Typeface>;

Helvetica.propTypes = {
  htmlAttribute: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.keys(types)),
  configuration: TypefaceInterface,
  onClick: PropTypes.func
};

export default Helvetica;