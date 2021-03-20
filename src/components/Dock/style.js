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
  font-size: 10px;
  font-weight: 700;
  backdrop-filter: blur(50px);
  background: rgba(0, 0, 0, 0.2);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;

  @media ${theme.device.mobileL} {
    box-shadow: ${theme.utility.dropShadow};
  }

    & > div {
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      transform: translateY(-20px);
    }
  }
`;

