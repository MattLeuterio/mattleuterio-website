import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../../ui/theme';

export const Container = styled.div`
  z-index: ${theme.zIndex.menus};
  //background: rgba(79, 79, 79, 0.2);
  position: relative;
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  box-shadow: ${theme.utility.dropShadow};
  backdrop-filter: blur(65px);

  > a > div {
    cursor: pointer;
  }
`;

export const BackgroundBlur = styled.div`
  position: absolute;
  background: #8F8F8F;
  mix-blend-mode: color-burn;
  opacity: 0.2;  
  width: 100%;
  height: 100%;
`;

export const LeftCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const RightCtn = styled.div`
  display: flex;
  margin-right: 20px;
`;


export const Name = styled.h1`
  margin-left: 16px;
  margin-bottom: 4px;
  font-size: 14px;
`;

export const Nav = styled.nav`
  width: 220px;
  display: flex;
  justify-content: flex-end;
  > a {
    color: white;
    transition: all .5s;
    &:not(:last-child) {
      margin-right: 5px;
    }

    &:hover {
      transform: rotate(5deg) scale(1.04);
    }
  }
`;