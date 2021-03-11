import styled from 'styled-components';
import theme from '../../ui/theme';

export const ImageWrapper = styled.div`
  width: ${ props  => `${props.size}px`};
  cursor: pointer;
  //display: flex;

  img {
    transform: ${ props  => !!props.rotate ? `rotate(${props.rotate}deg)` : null};
    transition: all 250ms ease-out;
  }
`;

export const ButtonCTN = styled.button`
  cursor: pointer;
  color: ${ props  => `${props.color}`};
  background: ${theme.colors.gradients.dark};
  border: 0;
  border-radius: 12px;
  box-shadow: ${theme.utility.boxShadowDown};
  padding: ${props => props.padding};
  display: flex;
  font-weight: bold;

  &:active {
    transform: translateY(3px);
    box-shadow: 4px 3px 10px rgba(0,0,0,0.25);
  }

  > div {
    margin-left: 15px;
  }
`;