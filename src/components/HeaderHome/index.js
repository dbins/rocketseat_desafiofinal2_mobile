import React from "react";
import PropTypes from "prop-types";

import { TouchableOpacity } from "react-native";
import { Content, Title, History, BagContainer, Bag } from "./styles";
import { navigate } from "../../services/navigation";

const MenuHeader = ({ title }) => (
  <Content>
   <TouchableOpacity onPress={() => navigate("Inicial")}>
      <History name="home" size={24} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate("Perfil")}>
      <History name="history" size={24} />
    </TouchableOpacity>
    <Title>{title}</Title>
	<TouchableOpacity onPress={() => navigate("Pesquisa")}>
        <Bag name="search" size={18} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigate("Carrinho")}>
      <BagContainer>
        <Bag name="shopping-bag" size={18} />
      </BagContainer>
    </TouchableOpacity>
  </Content>
);

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default MenuHeader;
