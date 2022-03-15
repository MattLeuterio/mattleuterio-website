import styled from 'styled-components';
import theme from '../../../../ui/theme';

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

export const BackPanel = styled.div`
  padding-left: 16px;
  margin-top: 82px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 125px;
`;

export const MenuContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 100%;
  height: 100%;
  transform: ${props => props.isActive 
      ? 'translateX(0)' 
      : 'translateX(-100%)'};
  background: ${props => props.theme === 'dark' ?
      `${theme.colors.darkTheme.panelBgContents}` :
      `${theme.colors.lightTheme.panelBgContents}`};
  transition: all 0.5s;

  & > div:first-child {
    padding: 20px;
  }
`;

export const TitleMenu = styled.h4`
  font-size: 32px;
  font-weight: 500;
  padding: 20px 0 10px 32px;
  color: ${props => props.theme === 'dark' ?
      `${theme.colors.darkTheme.lightText}` :
      `${theme.colors.lightTheme.darkText}`};
`;

export const MenuSections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleMenuSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  > span {
    line-height: 0.5;
  }
`;

export const MenuSection = styled.div`
  position: relative;
  cursor: pointer;
  width: 92%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  background: ${props => props.theme === 'dark' ?
      `${theme.colors.darkTheme.panelBgHeader}` :
      `${theme.colors.lightTheme.panelBgHeader}`};

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  & > div:last-child {
    margin-right: 16px;
  }
  
  &:first-child {
    border-radius: 10px 10px 0 0;
  }
  
  &:nth-child(2)::after,
  &:nth-child(2)::before {
    content: '';
    position: absolute;
    right: 0;
    width: calc(100% - 35px);
    height: 1px;
    background: ${props => props.theme === 'dark' ?
        `#3A3A3C` :
        `#E0E0E0`};
  }

  &:nth-child(2)::after {
    bottom: 0;
  }
  
  &:nth-child(2)::before {
    top: 0;
  }
  
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

export const TitleSection = styled.div`
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
  margin-left: 8px;
  color: ${props => props.theme === 'dark' ?
      `${theme.colors.darkTheme.lightText}` :
      `${theme.colors.lightTheme.darkText}`};
`;

export const TitleSectionContents = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` : 
    `${theme.colors.lightTheme.darkText}`};
`;

export const Main = styled.div`
  width: 100%;
  min-width: 100%;
  height: 100%;
  transform: ${props => props.isActive
      ? 'translateX(-100%)'
      : 'translateX(0)'};
  background: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.panelBgContents}` : 
    `${theme.colors.lightTheme.panelBgContents}`};
  transition: all 0.5s;
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