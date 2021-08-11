import styled from 'styled-components';
import theme from '../../ui/theme';

export const Container = styled.div`
  z-index: ${theme.zIndex.menus};
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
    display: none;
    transform: translateY(-50%);

    &:hover {
      cursor: pointer;
      background-color: #444444;
    }
  }

  > div {
    color: ${theme.colors.global.white};
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
`;

export const CurlyBrackets = styled.div`
  color: ${props => props.color === 'y' 
    ? `${theme.colors.global.yellow}` 
    : `#DA70D6`
  };
  font-size: 12px;
`;

export const JsonInfo = styled.div`
  color: #80CBC4;
  font-size: 12px;
`;

export const Name = styled.span`
  color: #C3E88D;
  font-size: 12px;
`;

