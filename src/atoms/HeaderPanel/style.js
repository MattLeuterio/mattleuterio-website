import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  background-color: ${props => !props.hasColors ? props.theme === 'dark' ?
          `${theme.colors.darkTheme.panelBgContents}` :
          `${theme.colors.lightTheme.panelBgContents}` : `${props.background}`};
  color: ${props => !props.hasColors ? props.theme === 'dark' ?
          `${theme.colors.darkTheme.lightText}` :
          `${theme.colors.lightTheme.darkText}` : props.color};

  @media ${theme.device.tablet} {
    filter: drop-shadow(${theme.utility.dropShadow});
  }
`;

export const Title = styled.h4`
  font-size: 13px;
  font-weight: 600;
  margin: auto;
`;