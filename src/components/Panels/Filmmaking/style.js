import styled from 'styled-components';
import theme from '../../../ui/theme';

export const HeaderPanel = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  color: #ccc;
  background-color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};;
  filter: drop-shadow(${theme.utility.dropShadow});
`;

export const Title = styled.h4`
  font-size: 13px;
  font-weight: 600;
  margin: auto;
`;

export const HeaderFilmmaking = styled.div`
  height: 50px;  
  width: 100%;
  display: flex;
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};
`;

export const Main = styled.div`
  height: calc(65% - 25px);  
  width: 100%;
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const InfoVideo = styled.div`
  height: calc(35% - 25px);  
  width: 100%;
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};
  background: green;
`;

export const MenuVideo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 230px;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  height: calc(100% - 77px);
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};
  transition: all .4s ease-in-out;
  filter: drop-shadow(2px 13px 6px rgba(0, 0, 0, 0.35));
  overflow: hidden;

  > div:not(:last-child) {
    border-bottom: ${props => props.theme === 'dark' ? '1px solid #2b2b2e' : '1px solid #d7d7d7'};
  }
`;

export const MenuProject = styled.div`
  padding: 10px;
  cursor: pointer;
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};
  background-color: ${props => props.selected ? props.theme === 'dark' ?
    '#2b2b2e' : '#c5c5c5' : 'transparent'};
`;
