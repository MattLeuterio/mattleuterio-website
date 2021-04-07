import styled from 'styled-components';
import theme from '../../../ui/theme';
import { IconThemeDark, IconThemeLight } from "../../../ui/assets/img/icons";

export const HeaderPanel = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  color: ${props => props.theme === 'dark' ? 
  `${theme.colors.darkTheme.lightText}` : 
  `${theme.colors.lightTheme.darkText}`};
  background: ${props => props.theme === 'dark' ? 
  `${theme.colors.darkTheme.panelBgHeader}` : 
  `${theme.colors.lightTheme.panelBgHeader}`};
`;

export const Title = styled.h4`
  font-weight: 600;
`
;

export const SidebarContainer = styled.div`
  position: relative;
  width: 156px;
  height: 100%;
  background: ${theme.colors.darkTheme.panelBgSidebar};

  & > div:first-child {
    padding: 20px;
  }
`;

export const TitleMenu = styled.h4`
  font-size: 12px;
  font-weight: 600;
  padding: 20px 10px;
  padding-bottom: 10px;
`;

export const MenuSections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuSection = styled.div`
  cursor: pointer;
  width: 92%;
  height: 20px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: ${props => props.active ? 
  `${theme.colors.global.disableControlPanel}` : 'transparent'};

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleSection = styled.div`
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
  margin-left: 8px;
`;

export const TitleSectionContents = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` : 
    `${theme.colors.lightTheme.darkText}`};
`;

export const Main = styled.div`
  width: calc(100% - 156px);
  height: 100%;
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};
`;

export const Contents = styled.div`
  padding: 32px 16px;
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};
`;

export const Images = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`;

export const ImageProfile = styled.div`
  width: calc(50% - 8px);
  height: 148px;
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const AboutText = styled.p`
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};
`;

export const Section = styled.div`
  margin: 16px 0;
`;

export const NameSection = styled.h2`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 10px;
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};
`;

export const ListSkills = styled.div``;

export const SkillValue = styled.h3`
  font-weight: 400;
  font-size: 12px;
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};
`;