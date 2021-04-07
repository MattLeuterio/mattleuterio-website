import styled from 'styled-components';
import theme from '../../../ui/theme';
import { IconThemeDark, IconThemeLight } from "../../../ui/assets/img/icons";

export const HeaderPanel = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: ${props => props.theme === 'dark' ? 
  `${theme.colors.darkTheme.lightText}` : 
  `${theme.colors.lightTheme.darkText}`};
  background: ${props => props.theme === 'dark' ? 
  `${theme.colors.darkTheme.panelBgHeader}` : 
  `${theme.colors.lightTheme.panelBgHeader}`};
`;

export const Title = styled.h4`
  font-weight: 600;
  margin-left: 30px;
`
;

export const PanelControls = styled.div`
  font-weight: 600;
  display: flex;

  & > div:not(:first-child) {
    margin-left: 8px;
  }
`;
export const PanelControl = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.type === 'close' ?
    `${theme.colors.global.close}` :
    `${theme.colors.global.disableControlPanel}`}; 

  &:hover {
    cursor: ${props => props.type === 'close' ? 'pointer' : 'default'};

    & > span {  
      display: inline-block;
    }
  };
  
  & > span {
    display: none;
    position: absolute;
    top: -4px;
  }
`;

export const Contents = styled.div`
  padding: 30px;
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};
  display: flex;
  flex-wrap: wrap;

  & > div:not(:last-child) {
    margin-right: 30px;
  }

  & > div:last-child {
    margin-top: 40px;
  }
`;

export const Section = styled.div`
`;
export const Label = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;
export const Content = styled.div`
  position: relative;
  display: flex;

  & > div:not(:last-child) {
    margin-right: 10px;
  }

  & > span {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-43%);

    & > svg {
      color: #0F68BC;
    }
  }
`;
export const ChoiceTheme = styled.div`
  cursor: pointer;
  border: ${props => props.theme === props.type ? 
  '2px solid #0F68BC' : 0};
  width: ${props => props.theme === props.type ? 
  '67px' : '65px'};
  height: ${props => props.theme === props.type ? 
  '44px' : '42px'};
  margin-top: ${props => props.theme === props.type ? 
  '0' : '2px'};
  border-radius: 8px;
  overflow: hidden;
  background-image: ${props => props.type === 'light' ?
  `url(${IconThemeLight})` : `url(${IconThemeDark})`};
`;

export const NameInput = styled.input`
  position: relative;
  width: 162px;
  height: 28px;
  padding: 0px 8px;
  border: none;
  border-radius: 6px;
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

export const BgsContainer = styled.div`
  display: flex;

  & > div:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Background = styled.div`
  cursor: pointer;
  background-image: ${props => `url(${props.bg})`};
  width: 130px;
  height: 85px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: ${props => props.bgSelected === props.name ? 
  '2px solid #0F68BC' : 0};
`;
