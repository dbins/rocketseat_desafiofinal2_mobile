import React from "react";
import PropTypes from "prop-types";

import { Container, Image, InfoContent, Titulo, Valor } from "./styles";

const ListItem = ({ titulo, uri, valor}) => (
  <Container>
    <Image source={{ uri }} />
    <InfoContent>
      <Titulo>{titulo}</Titulo>
      {valor ? <Valor>R$ {valor}</Valor> : null}
	  
	  </InfoContent>
  </Container>
);

ListItem.defaultProps = {
  valor: null
};

ListItem.propTypes = {
  titulo: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  valor: PropTypes.number
};

export default ListItem;
