import styled from 'styled-components';
import theme from '../../ui/theme';

export const ProjectFolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const HeaderFolder = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  padding-left: 10px;
  cursor: pointer;


  & > span {
    transform: ${props => props.openProjFolder ? 
    'rotate(90deg)' : 'rotate(0)'};
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const TitleProject = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;
export const Files = styled.div`
  width: 100%;
  height: ${props => props.openProjFolder ? 'fit-content' : '0px'};
  display: flex;
  flex-direction: column;
  overflow: hidden;  
`;
export const File = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
  padding-left: 20px;
  cursor: pointer;
  background-color: ${props => props.selected ? '#393a4c' : 'transparent'};
  
  & > span {
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleFile = styled.div`
  font-size: 13px;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const HeaderFolderImages = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  padding-left: 16px;
  cursor: pointer;

  & > span {
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.icon-arrow {
      transform: ${props => props.openProjFolder ? 
      'rotate(90deg)' : 'rotate(0)'};
    }
  }
`;

export const FolderImages = styled.div`
  width: 100%;
  height: ${props => props.openProjFolder ? 'fit-content' : '0px'};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const FileImage = styled.div`
  display: flex;
  align-items: center;
  height: 22px;
  padding-left: 26px;
  cursor: pointer;
  background-color: ${props => props.selected ? '#393a4c' : 'transparent'};
  
  & > span {
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;