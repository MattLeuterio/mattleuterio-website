import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: ${ props  => `${props.width}`};
  cursor: ${ props => props.onClick ? 'pointer' : 'default'};
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;