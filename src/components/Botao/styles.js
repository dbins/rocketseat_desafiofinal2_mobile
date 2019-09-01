import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '../../styles';

export const Container = styled.TouchableOpacity`
  height: 50;
  flex-direction: row;
  background-color: ${colors.red};
  border-radius: 30;
  justify-content: center;
  align-items: center;
  padding: 0 ${metrics.basePadding}px;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 16;
`;

export const AppIcon = styled(Icon)`
  color: ${colors.white};
  background-color: ${colors.transparent};
  margin-left: ${metrics.baseMargin * 2};
`;
