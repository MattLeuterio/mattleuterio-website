import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../../ui/theme';

export const Container = styled.div`
  z-index: ${theme.zIndex.menus};
  position: fixed;
  padding: 0 20px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 700;
  mix-blend-mode: difference;

  > a > div {
    cursor: pointer;
  }
`;

export const Name = styled.div`
  width: 220px;
  text-align: left;
  display: none;

  @media ${theme.device.mobileL} {
    display: block;
  }
`;

export const Nav = styled(motion.nav)`
  width: 220px;
  display: flex;
  justify-content: flex-end;
  > a {
    transition: all .5s;
    &:not(:last-child) {
      margin-right: 5px;
    }

    &:hover {
      transform: rotate(5deg) scale(1.04);
    }
  }
`;