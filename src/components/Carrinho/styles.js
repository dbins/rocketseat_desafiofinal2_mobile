import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius * 2};
  margin-top: ${metrics.baseMargin};
  height: 100;
  padding: ${metrics.basePadding}px;
`;
export const ImageContent = styled.View`
  margin-right: ${metrics.baseMargin};
  justify-content: center;
`;

export const Image = styled.Image`
  width: 70;
  height: 70;
`;

export const ProductInfo = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: ${metrics.baseMargin};
`;

export const ProductTitle = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: ${colors.dark};
`;
export const ProductSize = styled.Text`
  font-size: 14;
  color: ${colors.regular};
`;
export const ProductPrice = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: ${colors.darker};
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Delete = styled(Icon)`
  color: ${colors.red};
  /* background-color: ${colors.transparent}; */
  margin-right: ${metrics.baseMargin};
`;
