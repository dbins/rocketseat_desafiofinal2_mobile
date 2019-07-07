import React from "react";
import PropType from "prop-types";

import {
  Container,
  ImageContent,
  Image,
  ProductInfo,
  ProductTitle,
  ProductSize,
  ProductPrice,
  ButtonContent,
  Delete
} from "./styles";

const CartList = ({ data, remove }) => (
  <Container>
    <ImageContent>
      <Image source={{ uri: data.imagem }} />
    </ImageContent>
    <ProductInfo>
      <ProductTitle numberOfLines={1}>{data.titulo}</ProductTitle>
      <ProductSize>
        Tamanho:
        {data.tamanho}
      </ProductSize>
      <ProductPrice>
        R$
        {data.valor}
      </ProductPrice>
    </ProductInfo>

    <ButtonContent>
      <Delete name="trash-o" size={24} onPress={remove} />
    </ButtonContent>
  </Container>
);

CartList.propTypes = {
  data: PropType.shape({
    url: PropType.string,
    titulo: PropType.string,
    tamanho: PropType.string,
    valor: PropType.number
  }).isRequired,
  remove: PropType.func.isRequired
};

export default CartList;
