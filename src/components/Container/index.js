import React from "react";

import { Image, Content, StatusBar } from "./styles";
import HeaderBackground from "../../assets/header-background.png";

const Container = props => (
  <Content>
    <StatusBar />
    <Image source={HeaderBackground} />
    {props.children}
  </Content>
);

export default Container;
