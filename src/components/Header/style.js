import styled, { css } from 'styled-components';
import theme from '../../ui/theme';
import LogoGray from "../../ui/assets/img/header-logo-gray.png";
import LogoWhite from "../../ui/assets/img/header-logo-white.png";

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
  margin-left: 10px;
  justify-content: space-between;
  z-index: 1;

  > div {
    cursor: pointer;
  }
  
  @media ${theme.device.tablet} {
    width: fit-content;
    margin-left: 20px;
  }
`;

export const RightCtn = styled.div`
  display: none;
  margin-right: 10px;

  @media ${theme.device.tablet} {
    margin-right: 20px;
    display: flex;
  }
`;


export const Name = styled.h1`
  margin-left: 16px;
  margin-bottom: 4px;
  font-size: 14px;
  color: ${props => props.isLight  ? '#454545' : '#E7E7E7'};
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

  & > time:last-child {
    width: 40px;
    text-align: right;
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

export const OptionCtn = styled.div`
  width: 235px;
  height: 100px;
  border-radius: 10px;
  padding: 5px 5px 10px 5px;
  background: rgba(44,44,44,0.9);
  position: absolute;
  top: 28px;
  left: 10px;
  z-index: ${theme.zIndex.menus};
  backdrop-filter: blur(65px);

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    filter: blur(35px);
    z-index: -1;
  }

  div.option {
    position: relative;
    cursor: pointer;
    padding: 0 5px;
    border-radius: 3px;
    height: calc(100% / 3);
    display: flex;
    align-items: center;

    &:hover {
      background-color: ${theme.colors.global.highlightBlue};
    }

    &:last-child {
      margin-top: 5px;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 5px;
        width: 95%;
        height: 1px;
        background-color: rgba(235, 235, 245, 0.18);
      }
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const LogoWrapper = styled.div`
  width: 40px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.open ? '#e1e1e129' : 'transparent'};

  &:hover {
    background-color: #e1e1e129;
  }
`;

export const Container = styled.div`
  z-index: ${theme.zIndex.menus};
  //background: rgba(79, 79, 79, 0.2);
  position: relative;
  height: 24px;
  width: 100%;
  display: flex;
  justify-content: ${props => props.login ? 'flex-end' : 'space-between'};
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  backdrop-filter: blur(65px);
    
  @media ${theme.device.tablet} {
    box-shadow: ${theme.utility.dropShadow};
  }

  ${({ isIOS }) => isIOS && css`
    backdrop-filter: blur(0px);
    
    ${Name} {
      margin-left: 0;
      margin-right: 10px;
    }
  `}
`;
