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
