import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Creators as PerfilActions } from "../../store/ducks/perfil";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { ScrollView } from "react-native";
import moment from "moment";
import "moment/locale/pt-br";
import { Imagem, MeioPagamento, Texto, ContainerPagamentos } from "./styles";
import { CreditCardInput } from "react-native-credit-card-input";

class Pagamento extends Component {
  static propTypes = {
    perfil: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          order: PropTypes.shape({
            id: PropTypes.number,
            created_at: PropTypes.date,
            valor: PropTypes.number
          })
        })
      ),
      loading: PropTypes.bool,
      error: PropTypes.bool
    }).isRequired
  };

  componentWillMount() {}

  paginaInicial = () => {
    const { navigation } = this.props;
    navigation.navigate("Home");
  };

  cartao = () => {
    const { navigation } = this.props;
    navigation.navigate("Cartao");
  };

  dinheiro = () => {
    //Finalizar o pedido
  };

  render() {
    return (
      <Container>
        <Header title="Forma de Pagamento" navigateTo={this.paginaInicial} />
        <ScrollView>
          <ContainerPagamentos>
            <MeioPagamento onPress={this.dinheiro}>
              <Imagem source={require("../../assets/purse.png")} />
              <Texto>Dinheiro</Texto>
            </MeioPagamento>

            <MeioPagamento onPress={this.cartao}>
              <Imagem source={require("../../assets/mastercard.png")} />
              <Texto>Cartão de Crédito</Texto>
            </MeioPagamento>
          </ContainerPagamentos>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  perfil: state.perfil
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PerfilActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagamento);
