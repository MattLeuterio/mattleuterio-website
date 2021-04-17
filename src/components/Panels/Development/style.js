import styled from 'styled-components';
import theme from '../../../ui/theme';
import { IconThemeDark, IconThemeLight } from "../../../ui/assets/img/icons";

export const HeaderPanel = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  color: #ccc;
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

export const ProjectFolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const HeaderFolder = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  padding-left: 10px;


  & > span {
    transform: ${props => props.openProjFolder ? 
    'rotate(90deg)' : 'rotate(0)'};
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const TitleProject = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;
export const Files = styled.div`
  width: 100%;
  height: ${props => props.openProjFolder ? 'fit-content' : '0px'};
  display: flex;
  flex-direction: column;
  overflow: hidden;  
`;
export const File = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
  padding-left: 20px;
  
  & > span {
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleFile = styled.div`
  font-size: 13px;
  font-weight: 400;
`;

export const Contents = styled.div`
  width: 100%;
  height: 100%;
  background-color: #292D3E;
`;

export const FooterPanel = styled.div`
  height: 22px;
  width: 100%;
  background-color: #007ACC;
  padding: 0 8px;
`;



