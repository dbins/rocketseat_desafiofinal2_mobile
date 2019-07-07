import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  ImageContent,
  Image,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  EstimativeTimeContent,
  EstimativeTime,
  IconTime
} from "./styles";

const ProductList = ({ data }) => (
  <Container>
    <ImageContent>
      <Image source={{ uri: data.file.url }} />
    </ImageContent>

    <ProductInfo>
      <ProductTitle numberOfLines={1}>{data.nome}</ProductTitle>
      <ProductDescription>{data.descricao}</ProductDescription>
      <EstimativeTimeContent>
        <IconTime name="clock-o" />
        <EstimativeTime>{data.tempo_estimado} mins</EstimativeTime>
      </EstimativeTimeContent>
    </ProductInfo>
  </Container>
);

ProductList.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string
    }),
    nome: PropTypes.string,
    descricao: PropTypes.string,
    tempo_estimado: PropTypes.number
  }).isRequired
};

export default ProductList;
