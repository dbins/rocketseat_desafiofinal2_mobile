import React, { Component } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ProdutoActions } from "../../store/ducks/produto";
import Container from "../../components/Container";
import ProductHeader from "../../components/HeaderHome";
import ProductList from "../../components/ListaHome";
import { Loading, Error, ContainerBotoes, BotaoMeio, Imagem, TextoBotao } from "./styles";

class Redes extends Component {
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

  
  render() {
    return (
      <Container>
        <ProductHeader title="Redes Sociais" />
        <ContainerBotoes>
            <BotaoMeio onPress={() => {}}>
              <Imagem source={require('../../assets/facebook.png')} />
              <TextoBotao>Facebook </TextoBotao>
            </BotaoMeio>
            <BotaoMeio onPress={() => {}}>
              <Imagem source={require('../../assets/twitter.png')}/>
              <TextoBotao>Twitter</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
		  <ContainerBotoes>
            <BotaoMeio onPress={() => {}}>
              <Imagem source={require('../../assets/youtube.png')} />
              <TextoBotao>Youtube</TextoBotao>
            </BotaoMeio>
            <BotaoMeio onPress={() => {}}>
              <Imagem source={require('../../assets/instagram.png')}/>
              <TextoBotao>Instagram</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
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
)(Redes);
