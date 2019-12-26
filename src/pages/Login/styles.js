import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const Logo = styled.Image`
  width: 172px;
  height: 172px;
`;

export const Container = styled.View`
  flex: 1;
  background: ${colors.darkTransparent};
  align-items: stretch;
  justify-content: center;
  padding: 30px;
`;
export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${metrics.baseMargin * 2};
`;

export const Form = styled.View``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
})`
  background: ${colors.white};
  border-radius: ${metrics.baseRadius * 2};
  letter-spacing: 0;
  padding: 0 ${metrics.basePadding}px;
  height: 52px;
  font-size: 16px;
  color: ${colors.darker};
  margin-top: ${metrics.baseMargin};
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

export const LinkText = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: ${metrics.baseMargin * 2};
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: colors.white,
})``;
