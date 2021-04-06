import styled from 'styled-components';
import theme from '../../ui/theme';


export const Container = styled.div`
  font-weight: 600;
  display: flex;

  & > div:not(:first-child) {
    margin-left: 8px;
  }
`;

export const PanelControl = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.type === 'close' ?
    `${theme.colors.global.close}` :
    `${theme.colors.global.disableControlPanel}`}; 

  &:hover {
    cursor: ${props => props.type === 'close' ? 'pointer' : 'default'};

    & > span {  
      display: inline-block;
    }
  };
  
  & > span {
    display: none;
    position: absolute;
    top: -4px;
  }
`;