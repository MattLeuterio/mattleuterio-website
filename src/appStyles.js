import styled from 'styled-components';

export const App = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme === 'dark' ? 'black' : 'white'};
`;