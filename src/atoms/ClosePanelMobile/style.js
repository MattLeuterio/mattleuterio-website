import styled from 'styled-components';
import theme from "../../ui/theme";

export const ClosePanel = styled.div`
  position: fixed;
  top: 28px;
  right: 0;
  padding: 10px 15px 6px;
  background: ${props => props.theme === 'dark' ?
          `${theme.colors.darkTheme.panelBgHeader}` :
          `#b3b3b3`};
  z-index: ${theme.zIndex.absoluteUp};
  border-radius: 50% 0 0 50%;
`;