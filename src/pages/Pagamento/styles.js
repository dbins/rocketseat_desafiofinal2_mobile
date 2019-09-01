import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const MeioPagamento = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  background-color: ${colors.white};
`;

export const Imagem = styled.Image`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

export const Texto = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerPagamentos = styled.View`
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.red};
  border-radius: ${metrics.baseRadius * 2};
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.baseMargin * 2};
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: colors.white,
})``;
