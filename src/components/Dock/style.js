import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  z-index: ${theme.zIndex.menus};
  //background: rgba(79, 79, 79, 0.2);
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 5px;
  font-size: 12px;
  backdrop-filter: blur(50px);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  width: calc(100% - 32px);

  @media ${theme.device.mobileL} {
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    width: fit-content;
    box-shadow: ${theme.utility.dropShadow};
  }

    & > div {
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-10px);
    }
  }
`;

export const IconApp = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    &::after {
      content: '${props => `${props.name}`}';
      position: absolute;
      padding: 5px 10px;
      top: -30px;
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
`;

