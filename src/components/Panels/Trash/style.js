import styled from 'styled-components';
import theme from '../../../ui/theme';

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
  background-color: ${props => props.theme.colors.primary.gray};

  @media ${theme.device.tabletL} {
    background-color: transparent;
    flex-wrap: nowrap;
  }
`;

export const Title = styled.h4`
  font-weight: 600;
  margin-left: 30px;
`;

export const Contents = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 32px 16px;
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};

  & > div:not(:last-child) {
    margin-right: 70px;

    @media ${theme.device.tabletL} {
      margin-right: 30px;
    }
  }

  @media ${theme.device.tabletL} {
    flex-wrap: nowrap;
  }
  
`;

export const Element = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  
  @media ${theme.device.tabletL} {
    margin-bottom: 0;
  }
`;

export const ElementName = styled.div`
  font-size: 10px;
  margin-top: 8px;
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};
`;

