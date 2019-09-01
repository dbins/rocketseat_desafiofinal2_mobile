import styled from 'styled-components/native';
import { metrics, colors } from '../../styles';

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
