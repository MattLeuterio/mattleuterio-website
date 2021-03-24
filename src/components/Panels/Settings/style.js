import styled from 'styled-components';
import theme from '../../../ui/theme';

export const Container = styled.div`
  z-index: ${props => props.active ? `${theme.zIndex.active}` : `${theme.zIndex.body}`};
  position: absolute;
  width: 675px;
  height: 381px;
  top: 150px;
  right: 50px;
  border-radius: 10px;
  overflow: hidden;
  background: red;
`;

