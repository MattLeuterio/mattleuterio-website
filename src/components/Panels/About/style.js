import styled, { css } from 'styled-components';
import theme from '../../../ui/theme';
import { IconThemeDark, IconThemeLight } from "../../../ui/assets/img/icons";

export const HeaderPanel = styled.div`
  width: 100%;
  height: 40px;
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
  height: calc(100% - 40px);
  padding: 30px 50px;
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};
  display: flex;
`;

export const ImageWrapper = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
export const InfoWrapper = styled.div`
  height: 100%;
  width: 65%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileImg = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  border: 7px solid ${props => props.themeSelected === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};

  > div {
    padding: 20px;
  }

  ${({ themeSelected }) => themeSelected === 'dark' && css`
    > div {
      background: ${theme.colors.darkTheme.panelBgHeader};
    }
  `}

  ${({ themeSelected }) => themeSelected === 'light' && css`
    > div {
      background: #d9d9d9;
    }
  `}
`;

export const Title = styled.div`
  margin-bottom: 30px;
  span {
    font-weight: bold;
  }
`;

export const Tecnology = styled.div`
  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Row = styled.div`
  display: flex;

  > span:first-child {
    margin-right: 5px;
  }
`;
