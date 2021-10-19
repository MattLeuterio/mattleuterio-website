import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  cursor: pointer;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 50px;
`;

export const HamburgerIcon = styled.div`
  width: 22px;
  height: 2px;
  display: flex;
  justify-content: flex-end;
  background-color: ${props => (props.open ? 'none' : props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` : 
    `${theme.colors.lightTheme.darkText}`)};
  transition: all .5s ease-in-out;
  transform: ${props => (props.open ? 'translateX(-50px)' : 'none')}; 
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    background-color: ${props => props.theme === 'dark' ?
    `${theme.colors.darkTheme.lightText}` : 
    `${theme.colors.lightTheme.darkText}`};
    transition: all .5s ease-in-out;
  }
  
  &::before {
    width: 22px;
    transform: ${props => (props.open
    ? 'rotate(45deg) translate(35px, -35px)'
    : 'translateY(-6px)')};
  }
  
  &::after {
    width: 22px;
    transform: ${props => (props.open
    ? 'rotate(-45deg) translate(35px, 35px)'
    : 'translateY(6px)')};
  }
`;
