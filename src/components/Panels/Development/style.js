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
  height: 36px;
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

export const Contents = styled.div`
  width: 100%;
  height: 100%;
  background-color: #292d3e;
`;

export const FooterPanel = styled.div`
  height: 22px;
  width: 100%;
  background-color: #007ACC;
  padding: 0 8px;
`;


export const NoPanel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // Image
  > div:first-child {
    filter: brightness(0.6) opacity(0.3);
    margin-bottom: 16px;
  }

  // Title
  > div:nth-child(2) {
    margin-bottom: 5px;
  }
`;
