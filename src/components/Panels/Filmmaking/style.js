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
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};;
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
  height: 100%;
  overflow: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #31364a;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fe0000;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #7a0000;
  }
`;

export const VideoContainer = styled.div`
  height: 65%;  
  width: 100%;
  border-bottom: 2px solid #fe0000;
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};
`;

export const PlayerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const MenuVideo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 230px;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  height: calc(100% - 75px);
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

export const InfoVideoContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};
`;

export const InfoVideo = styled.div`
  width: 40%;
  height: 100%;
`;

export const InfoTitle = styled.div`
  padding-bottom: 10px;
`;

export const InfoDescription = styled.div`
  border-top: ${props => props.theme === 'dark' ?
    '1px solid #363636' : 
    '1px solid #cbcbcb'};
  padding: 10px 0;
`;

export const Gears = styled.div`
  width: 27%;
  height: 100%;
`;

export const Links = styled.div`
  width: 27%;
  height: 100%;
`;

export const ExternalLinks = styled.a`
  background: ${theme.colors.global.highlightBlue};
  padding: 6px 10px;
  border-radius: 30px;
  width: fit-content;
  display: flex;
  color: ${theme.colors.darkTheme.lightText};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
