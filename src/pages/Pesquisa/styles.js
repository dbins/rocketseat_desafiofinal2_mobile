import styled from 'styled-components/native';
import { metrics, colors } from '../../styles';
import Icon from "react-native-vector-icons/FontAwesome5";

export const Content = styled.View`
  padding: 0 ${metrics.basePadding / 2}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const Loading = styled.ActivityIndicator`
  margin-top: ${metrics.baseMargin * 3};
`;

export const Error = styled.Text`
  color: ${colors.black};
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 150px;
  margin-left: 20px;
`;

export const SearchBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #CCCCCC;
  border-radius: 4px;
  height: 50px;
  padding: 0px 10px;
  margin: 20px;
`;

export const SearchBarMessage = styled.Text`
  height: 50px;
  color: #000000;
  padding: 0px 10px;
  margin: 22px;
`;

export const SearchIcon = styled(Icon)`
  color: #000000;
  margin-right: 10px;
`;

export const SearchText = styled.TextInput`
  font-size: 18px;
  color: #000000;
`;

export const ModalContainer = styled.View`
   background-color: #FFFFFF;
   padding: 20px;
`;

export const ModalImage = styled.Image`
   width: 350px;
   height: 250px;
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.black};
`;

export const ModalContent = styled.Text`
  font-size: 16px;
  color: ${colors.black};
`;