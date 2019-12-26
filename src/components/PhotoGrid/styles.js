import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex: 1;
    padding-top: 20px;
    align-items: center;
    justify-content: center
`;

export const PhotoView = styled.View`
    height: 120px;
    flex: 2;
    background-color: gray;
    margin-horizontal: 5px;
    margin-vertical: 5px;
    justify-content: center
`;

export const FlexCol = styled.View`
	flex: 1;
    flex-direction: column
    
`;

export const AlignCenter = styled.View`
    flex: 1;
	flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
	padding-right: 5px;
    width: ${Dimensions.get('window').width - 20};
    
`;

export const ExpandedView = styled.View`
    flex: 2;
	height: 249px;
    backgroundColor: gray;
    margin-horizontal: 5px
    margin-vertical: 5px;
`;  

export const ExpandedImage = styled.Image`
   height: 249px;
`;  
