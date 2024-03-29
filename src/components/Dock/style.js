import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  z-index: ${theme.zIndex.dock};
  //background: rgba(79, 79, 79, 0.2);
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 4px;
  font-size: 12px;
  backdrop-filter: blur(50px);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  width: calc(100% - 32px);
  max-width: 343px;

  @media ${theme.device.tabletL} {
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    width: fit-content;
    box-shadow: ${theme.utility.dropShadow};
    max-width: fit-content;
  }
`;

export const IconApp = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.3s;


  &:hover {
    transform: translateY(-5px);
    &::after {
      content: '${props => `${props.name}`}';
      position: absolute;
      padding: 5px 10px;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${theme.colors.darkTheme.panelBgContents};
      color: ${theme.colors.darkTheme.lightText};
      box-shadow: ${theme.utility.dropShadow};
      border: 1px solid #48484a;
      border-radius: 6px;
      filter: drop-shadow(${theme.utility.dropShadow});
    }
  }

  &::before {
    content: '';
    display: ${props => props.open ? 'block' : 'none'};
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #C4C4C4;
  }
`;

