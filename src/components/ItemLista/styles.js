import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius * 2};
  margin-top: ${metrics.baseMargin};
  margin-bottom: ${metrics.baseMargin / 2};
  align-items: center;
  width: ${(metrics.screenWidth - 45) / 2};
  height: 200;
  padding: ${metrics.basePadding}px;
`;

export const Image = styled.Image`
  width: 100;
  height: 100;
`;

export const InfoContent = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Titulo = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${colors.darker};
`;
export const Valor = styled.Text`
  font-size: 14;
  color: ${colors.regular};
`;
