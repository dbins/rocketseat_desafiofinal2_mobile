import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';
import Button from '../../components/Botao';

export const Content = styled.View`
  flex-direction: column;
  width: ${metrics.screenWidth - 40};
  margin-left: 20;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius * 2};
  letter-spacing: 0;
  padding: 0 ${metrics.basePadding}px;
  height: 55px;
  font-size: 16px;
  color: ${colors.darker};
  margin-top: ${metrics.baseMargin};
`;

export const Observacao = styled(Input)`
  height: 160px;
  padding-top: 15;
`;

export const Endereco = styled.View`
  flex-direction: row;
`;
export const Rua = styled(Input)`
  width: ${metrics.screenWidth * 0.6};
  margin-right: ${metrics.baseMargin};
`;
export const Numero = styled(Input)`
  flex: 1;
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  margin-top: ${metrics.baseMargin * 2};
  justify-content: flex-end;
`;

export const ButtonOrder = styled(Button)`
  width: ${metrics.screenWidth};
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: colors.white,
})``;

export const Error = styled.Text`
  color: ${colors.black};
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
`;
