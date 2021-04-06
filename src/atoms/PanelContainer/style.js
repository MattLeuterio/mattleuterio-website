import { motion } from 'framer-motion';
import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled(motion.div)`
  z-index: ${props => props.active ? 
  `${theme.zIndex.active}` : `${theme.zIndex.body}`} !important;
  position: absolute;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  top: ${props => props.top ? `${props.top}px` : 'auto'};
  right: ${props => props.right ? `${props.right}px` : 'auto'};
  bottom: ${props => props.bottom ? `${props.bottom}px` : 'auto'};
  left: ${props => props.left ? `${props.left}px` : 'auto'};
  border-radius: 10px;
  overflow: hidden;
  filter: drop-shadow(${theme.utility.dropShadow});
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};

`;