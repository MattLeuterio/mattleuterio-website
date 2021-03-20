import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  z-index: ${theme.zIndex.menus};
  //background: rgba(79, 79, 79, 0.2);
  position: relative;
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  backdrop-filter: blur(65px);

  @media ${theme.device.mobileL} {
    box-shadow: ${theme.utility.dropShadow};
  }
`;

export const BackgroundBlur = styled.div`
  position: absolute;
  background: #8F8F8F;
  mix-blend-mode: color-burn;
  opacity: 0.2;  
  width: 100%;
  height: 100%;
`;

export const LeftCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px;
  justify-content: space-between;

  @media ${theme.device.mobileL} {
    width: fit-content;
    margin-right: 0;
  }
`;

export const RightCtn = styled.div`
  display: none;
  margin-right: 20px;

  @media ${theme.device.mobileL} {
    display: flex;
  }
`;


export const Name = styled.h1`
  margin-left: 16px;
  margin-bottom: 4px;
  font-size: 14px;
`;

export const Date = styled.nav`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2.2px;

  & > time {
    filter: drop-shadow(${theme.utility.dropShadow});
  }

  & > time:first-child {
    margin-right: 6px;
  }
`;

export const Social = styled.div`
  display: flex;

  & > a:last-child {
    margin-right: 8px;
  }
`;

export const LinkSocial = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    filter: drop-shadow(${theme.utility.dropShadow});
  }
`;
