import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled(motion.div)`
  z-index: ${props => props.active ? 
  `${theme.zIndex.active}` : `${theme.zIndex.body}`} !important;
  position: absolute;
  width: ${props => `${props.widthPan}px`};
  height: ${props => `${props.heightPan}px`};
  top: ${props => props.top ? `${props.top}px` : 'auto'};
  right: ${props => props.right ? `${props.right}px` : 'auto'};
  bottom: ${props => props.bottom ? `${props.bottom}px` : 'auto'};
  left: ${props => props.left ? `${props.left}px` : 'auto'};
  border-radius: 10px;
  overflow: hidden;
  display: ${props => props.open ? props.display ? `${props.display}` : 'block' : 'none'};
  flex-direction: ${props => props.flexDirection ? `${props.flexDirection}` : 'row'};
  filter: drop-shadow(${theme.utility.dropShadow});
  background: ${props => !props.noBackground ? props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}` : 'transparent'};
    
  ${({ isIOS }) => isIOS && css`
    top: ${props => props.top ? 0 : 'auto'};
    left: ${props => props.left ? 0 : 'auto'};
    right: ${props => props.right ? 0 : 'auto'};
    bottom: ${props => props.bottom ? 0 : 'auto'};
    width: 100%;
    height: 100vh;
    border-radius: 0;
    z-index: ${theme.zIndex.mobileActive} !important;
  `}
`;