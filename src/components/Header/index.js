import React from "react";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { Content, ContentTitle, Title, BackToPage, TotalPrice } from "./styles";

const Header = ({ title, navigateTo, totalValue }) => (
  <Content>
    <TouchableOpacity onPress={navigateTo}>
      <ContentTitle>
        <BackToPage name="angle-left" size={24} />
        <Title>{title}</Title>
      </ContentTitle>
    </TouchableOpacity>
    {totalValue ? <TotalPrice>R$ {totalValue}</TotalPrice> : null}
  </Content>
);

Header.defaultProps = {
  totalValue: 0
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired,
  totalValue: PropTypes.number
};

export default Header;
