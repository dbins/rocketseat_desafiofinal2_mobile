import React, { Component } from "react";
import { TouchableOpacity, ScrollView, FlatList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ProdutoActions } from "../../store/ducks/produto";
import Container from "../../components/Container";
import ProductHeader from "../../components/HeaderHome";
import ProductList from "../../components/ListaHome";
import { Loading, Error,Imagem, Texto, Box,  Conteudo } from "./styles";

const data = [
  {id: '1', texto: 'No próximo mês vamos ter novos horários de atendimento, em breve mais informações', imagem: require('../../assets/aviso1.png') },
  {id: '2', texto: 'Lançamento! Mais 6 tipos de pizzas! Não deixe de experimentar.', imagem: require('../../assets/aviso2.png')},
  {id: '3', texto: 'Peça 2 pizzas grandes e ganhe grátis um refrigerante de 1 litro', imagem: require('../../assets/aviso3.png')},
  {id: '4', texto: 'Agora também fazemos sanduiches! Confira nossos sanduíches naturais, peça 2 sanduíches e ganhe 1 suco grátis', imagem: require('../../assets/aviso4.png') },
  {id: '5', texto: 'Todas as sextas e sábados são especiais. Nossas cervejas tem 15% de desconto', imagem: require('../../assets/aviso5.png')}
];

class Avisos extends Component {
  static propTypes = {
    productRequest: PropTypes.func.isRequired,
    product: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number
        })
      ),
      loading: PropTypes.bool,
      error: PropTypes.bool
    }).isRequired,
    productSelected: PropTypes.func.isRequired,
    exibir: PropTypes.bool
  };
  
  renderGridItem( item ){
    return (
      <Box key={item.id}>
          <Imagem source={item.imagem}/>
          <Texto>{item.texto}</Texto>
        </Box>
    );
  }

  
  render() {
    return (
      <Container>
        <ProductHeader title="Avisos" />
         <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>this.renderGridItem(item)}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  product: state.produto,
  exibir: true
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProdutoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avisos);
