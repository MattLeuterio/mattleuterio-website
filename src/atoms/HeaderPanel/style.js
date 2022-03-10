import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
  margin-top: 82px;
  background-color: ${props => !props.hasColors ? props.theme === 'dark' ?
          `${theme.colors.darkTheme.panelBgContents}` :
          `${theme.colors.lightTheme.panelBgContents}` : `${props.background}`};
  color: ${props => !props.hasColors ? props.theme === 'dark' ?
          `${theme.colors.darkTheme.lightText}` :
          `${theme.colors.lightTheme.darkText}` : props.color};

  @media ${theme.device.tablet} {
    filter: drop-shadow(${theme.utility.dropShadow});
    height: 28px;
    margin-top: 0;
  }
`;

export const Title = styled.h4`
  font-size: 48px;
  font-weight: 600;

  @media ${theme.device.tablet} {
    font-size: 14px;
    margin: auto;
  }
`;