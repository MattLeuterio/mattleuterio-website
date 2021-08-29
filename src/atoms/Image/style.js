import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: ${ props  => `${props.width}`};
  height: ${ props => props.height ? `${props.height}` : 'auto'};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;