import styled, { css } from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  z-index: ${theme.zIndex.menus};
  height: 100%;
`;

export const Header = styled.div`
  height: 36px;
  background-color: #31364A;
`;

export const TitleWrapper = styled.div`
  height: 100%;
`;

// export const Title = styled.div`
//   width: fit-content;
//   height: 100%;
//   background-color: #292D3E;
// `;

export const Title = styled.div`
  position: relative;
  width: fit-content;
  height: 100%;
  padding: 11px 32px;
  display: flex;
  background-color: #292D3E;
  border-bottom: 1px solid #007acc;

  &:hover {
    > span:last-child {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
  }

  // Icon File Type
  > span:first-child {
    margin-right: 10px;
  }

  // Icon Close
  > span:last-child {
    position: absolute;
    top: 50%;
    right: 5px;
    height: 20px;
    width: 20px;
    border-radius: 3px;
    transform: translateY(-37%);

    &:hover {
      cursor: pointer;
      background-color: #444444;
    }
    
    @media ${theme.device.tabletL} {
      display: none;
      transform: translateY(-50%)
    }
  }

  > div {
    color: ${theme.colors.global.white};
    white-space: nowrap;
  }
`;

export const ContentWrapper = styled.div`
  height: 564px;
  padding: 10px 20px;
  overflow: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #31364a;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #007acc;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #00538b;
  }
`;

export const CurlyBrackets = styled.div`
  color: ${props => props.color === 'y' 
    ? `${theme.colors.global.yellow}` 
    : `#DA70D6`
  };
  font-size: 12px;
  margin-left: ${props => `${4 * props.intendationLvl}px`};
`;

export const JsonInfo = styled.div`
  color: #80CBC4;
  font-size: 12px;
  margin-left: ${props => `${4 * props.intendationLvl}px`};
  margin-bottom: 1.2px;
`;

export const Name = styled.span`
  color: #C3E88D;
  font-size: 12px;
  > div {
    display: inline;
  }
`;

export const Comma = styled.span`
  color: ${theme.colors.darkTheme.lightText};
  &:after {
    content: ","
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const SectionReadme = styled.div`
  margin-bottom: 20px;
`;

export const Intestation = styled.div`
  color: ${theme.colors.readme.lightBlue};
  
  ${({ hasMargin }) => hasMargin && css`
    margin-bottom: 20px;
  `};
`;

export const Body = styled.div``;

export const Span = styled.span`
  color: ${props => props.color};
`;

export const LinkReadme = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;


