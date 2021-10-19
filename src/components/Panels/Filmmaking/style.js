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
  height: calc(60% - 25px);  
  width: 100%;
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};
  background: red;
`;

export const InfoVideo = styled.div`
  height: calc(40% - 25px);  
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
  width: ${props => props.open ? '230px' : '0px'};
  height: calc(100% - 77px);
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};
  transition: all .4s ease-in-out;
  filter: drop-shadow(2px 13px 6px rgba(0, 0, 0, 0.35))
`;
