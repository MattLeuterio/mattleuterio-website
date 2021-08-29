import styled from 'styled-components';
import theme from './ui/theme';
import { HeaderHeight } from './const';

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

export const LoginPage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Login = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - ${HeaderHeight}px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ProfileImg = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 20px;

  > span {
    position: absolute;
    cursor: pointer;
    top: 58%;
    right: -3px;
    transform: translateY(-50%);
  }
`;

export const NameInput = styled.input`
  position: relative;
  width: 162px;
  height: 28px;
  padding: 0px 12px;
  border: none;
  border-radius: 50px;
  background: ${props => props.theme === 'dark' ? 
  `${theme.colors.darkTheme.panelBgHeader}` : 
  `${theme.colors.lightTheme.panelBgHeader}`};
  color: ${props => props.theme === 'dark' ? 
  `${theme.colors.darkTheme.lightText}` : 
  `${theme.colors.lightTheme.darkText}`};

  
  &:focus {
    outline: none;
    border: 2px solid #0F68BC;
  }
`;
