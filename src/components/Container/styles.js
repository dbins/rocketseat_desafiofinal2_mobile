import { colors, metrics } from "../../styles";

import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;
  background-color: ${colors.lighter};
`;

export const Image = styled.Image`
  width: ${metrics.screenWidth};
  height: 25%;
  position: absolute;
`;
export const StatusBar = styled.StatusBar.attrs({
  backgroundColor: "#0b2031"
})``;
