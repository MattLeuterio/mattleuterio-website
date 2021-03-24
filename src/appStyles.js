import styled from 'styled-components';
import theme from './ui/theme';

export const App = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Welcome = styled.div`
  font-size: 24px;
  width: calc(100% - 46px);
  margin: auto;
  margin-top: 32px;
  height: 155px;
  padding: 0 16px;
  background: rgba(0, 0, 0, .4);
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(${theme.utility.dropShadow});
  text-align: center;

  @media ${theme.device.mobileL} {
    font-size: 72px;
    margin-top: 210px;
    width: fit-content;
    height: fit-content;
    background: transparent;
  }
`;