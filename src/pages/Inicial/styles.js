import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Loading = styled.ActivityIndicator`
  margin-top: ${metrics.baseMargin * 2};
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

export const ContainerBotoes = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
`;

export const Imagem = styled.Image`
  width: 128px;
  height: 128px;
  margin: 5px;
`;

export const BotaoMeio = styled.TouchableOpacity`
  margin: 2px;
  width: 50%;
  align-items: center;
`;

export const TextoBotao = styled.Text`
  color: #000000	
`;
