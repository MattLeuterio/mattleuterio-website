import styled from 'styled-components';
import theme from '../../ui/theme';
import { HeaderHeight } from '../../const';

export const LoginPage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LoginWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - ${HeaderHeight}px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  
  @media ${theme.device.tabletL} {
    justify-content: center;
  }
`;
export const ProfileImg = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const DateTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 130px;
`;
export const DateTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  
  > time:first-child {
    font-size: 83px;
    font-weight: 200;
    line-height: 1;
  }
  
  > time:last-child {
    font-size: 22px;
    font-weight: 400;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 20px;

  > span {
    position: absolute;
    cursor: ${props => props.disabled ? 'pointer' : 'not-allowed'};
    top: 58%;
    right: -3px;
    transform: translateY(-50%);
  }
`;

export const NameInput = styled.input`
  position: relative;
  width: 212px;
  height: 28px;
  padding: 0px 12px;
  padding-right: 30px;
  border: none;
  border-radius: 50px;
  background: ${props => props.theme === 'dark' ? 
  `${theme.colors.darkTheme.panelBgHeader}` : 
  `${theme.colors.lightTheme.panelBgHeader}`};
  color: ${props => props.theme === 'dark' ? 
  `${theme.colors.darkTheme.lightText}` : 
  `${theme.colors.lightTheme.darkText}`};

  @media ${theme.device.tabletL} {
    width: 162px;
  }
  
  &:focus {
    outline: none;
    border: 2px solid ${theme.colors.global.highlightBlue};
  }
`;