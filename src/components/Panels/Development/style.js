import styled from 'styled-components';
import theme from '../../../ui/theme';
import { IconThemeDark, IconThemeLight } from "../../../ui/assets/img/icons";

export const HeaderPanel = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  color: #fff;
  background-color: #292D3E;
  filter: drop-shadow(${theme.utility.dropShadow});
`;

export const Title = styled.h4`
  font-size: 13px;
  font-weight: 600;
  margin: auto;
`;

export const Main = styled.div`
  height: calc(100% - 50px);  
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
`;

export const SidebarContainer = styled.div`
  width: 220px;
  height: 100%;
  background-color: #292D3E;

  & > div:first-child {
    padding: 20px;
  }
`;

  
export const LeftContainer = styled.div`
  width: 50px;
  height: 100%;
  background-color: #31364A;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    width: 48px;
    padding: 12px;
    border-left: 2px solid;
  }
`;

export const TitleMenu = styled.div`
  font-size: 11px;
  font-weight: 500;
  width: 100%;
  height: 40px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #3C3C3C;
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


export const FooterPanel = styled.div`
  height: 22px;
  width: 100%;
  background-color: #007ACC;
  padding: 0 8px;
`;

export const Contents = styled.div`
  width: 100%;
  height: 100%;
  background-color: #292D3E;
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