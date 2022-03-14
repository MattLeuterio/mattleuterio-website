import styled, {css} from 'styled-components';
import theme from '../../../../ui/theme';
import { IconThemeDarkMob, IconThemeLightMob } from "../../../../ui/assets/img/icons";

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
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: calc(100% - 140px);
`;

export const Section = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const Label = styled.h2`
  padding: 0 16px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
  text-transform: uppercase;
`;
export const Content = styled.div`
  padding: 0 16px;
  position: relative;
  display: flex;
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgHeader}` :
    `${theme.colors.lightTheme.panelBgHeader}`};

  & > div:not(:last-child) {
    margin-right: 50px;
  }

  & > span {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-43%);

    & > svg {
      color: ${theme.colors.global.highlightBlue};
    }
  }
  
  ${props => props.type === 'choice-theme' && css`
    padding: 52px 0;
    justify-content: center;
    align-items: center;
  `};
  
  ${props => props.type === 'set-name' && css`
    padding: 30px 16px;
  `};
  
  ${props => props.type === 'info' && css`
    padding: 20px 16px;
    margin-top: 20px;
  `};
`;

export const ProfileImg = styled.div`
  border-radius: 50%;
  overflow: hidden;
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` :
    `${theme.colors.lightTheme.panelBgContents}`};
  
  > div {
    padding: 16px;
  }
`;

export const InfoUser = styled.div`
  margin: auto 0;
`;

export const ChoiceTheme = styled.div`
  cursor: pointer;
  border: ${props => props.theme === props.type ? 
  `2px solid ${theme.colors.global.highlightBlue}` : 0};
  width: ${props => props.theme === props.type ? 
  '65px' : '63px'};
  height: ${props => props.theme === props.type ? 
  '130px' : '128px'};
  margin-top: ${props => props.theme === props.type ? 
  '0' : '2px'};
  border-radius: 13px;
  overflow: hidden;
  background-image: ${props => props.type === 'light' ?
  `url(${IconThemeLightMob})` : `url(${IconThemeDarkMob})`};
`;

export const NameInput = styled.input`
  position: relative;
  width: 162px;
  height: 28px;
  padding: 0px 8px;
  border: none;
  border-radius: 6px;
  background: ${props => props.theme === 'dark' ? 
  '#2d2d2d' : 
  '#eaeaea'};
  color: ${props => props.theme === 'dark' ? 
  `${theme.colors.darkTheme.lightText}` : 
  `${theme.colors.lightTheme.darkText}`};

  
  &:focus {
    outline: none;
    border: 2px solid ${theme.colors.global.highlightBlue};
  }
`;

export const BgsContainer = styled.div`
  background: ${props => props.theme === 'dark' ?
      `${theme.colors.darkTheme.panelBgHeader}` :
      `${theme.colors.lightTheme.panelBgHeader}`};
`;

export const BgWrapper = styled.div`
  max-width: 320px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Background = styled.div`
  cursor: pointer;
  background-image: ${props => `url(${props.bg})`};
  width: 92px;
  height: 186px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 13px;
  border: ${props => props.bgSelected === props.name ? 
  `2px solid ${theme.colors.global.highlightBlue}` : 0};
  margin: 20px;

  /*@media (min-width: 396px) {
    margin: 30px;
  } 
  
  @media (min-width: 396px) {
    margin: 40px;
  }
  @media (min-width: 516px) {
    margin: 50px;
  }*/
  
`;
