import styled from 'styled-components';
import theme from '../../ui/theme';
import { HeaderHeight } from '../../const';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Hello = styled.h2`
  width: 100%;
  height: 100%;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media ${theme.device.mobileL} {
    font-size: 100px;
  }
`;