import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const ContainerPedidos = styled.View`
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${colors.white};
  padding: 0 ${metrics.basePadding}px;
  margin: ${metrics.baseMargin}px ${metrics.baseMargin * 2}px;
  border-radius: ${metrics.baseRadius * 2};
  height: 110px;
  border-width: 0.5;
  border-color: ${colors.lighter};
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

export const Title = styled.Text`
  color: ${colors.primary};
  margin-top: ${metrics.baseMargin};
  margin-bottom: ${metrics.baseMargin};
`;

export const Value = styled.Text`
  font-weight: bold;
  color: ${colors.primary};
  margin-top: ${metrics.baseMargin / 2};
`;

export const Date = styled.Text`
  color: ${colors.regular};
  margin-top: ${metrics.baseMargin / 2};
`;
