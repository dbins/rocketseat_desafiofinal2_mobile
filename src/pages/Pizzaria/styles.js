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

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${metrics.baseMargin * 2};
`;

export const Logo = styled.Image`
  width: 172px;
  height: 172px;
`;

export const Titulo = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
  margin-left: 20px;
`;

export const Texto = styled.Text`
  color: ${colors.black};
  font-size: 14px;
  margin-right: 20px;
  margin-left: 20px;
`;

export const Content = styled.ScrollView`
	flex: 1
`;