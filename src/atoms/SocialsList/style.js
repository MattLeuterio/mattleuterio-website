import styled from 'styled-components';
import theme from '../../ui/theme';

export const Social = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};

  & > a:last-child {
    margin-right: ${props => props.nameSocial ? '0px' : '8px'};;
  }
`;

export const LinkSocial = styled.a`
  width: ${props => props.nameSocial ? '100%' : '24px'};
  height: ${props => props.nameSocial ? '100%' : '24px'};
  display: flex;
  justify-content: ${props  => props.nameSocial ? 'flex-start' : 'center'};;
  align-items: center;
  margin-bottom: ${props => props.nameSocial ? '8px' : '0'};
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};

  & > span {
    filter: drop-shadow(${theme.utility.dropShadow});
  }
`;

export const SocialName = styled.h2`
  font-size: 12px;
  font-weight: 400;
  margin-left: 8px;
  color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` :
    `${theme.colors.lightTheme.darkText}`};
`;