import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Creators as PedidoActions } from "../../store/ducks/pedido";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { ScrollView } from "react-native";
import moment from "moment";
import "moment/locale/pt-br";
import { Button, Loading, Text } from "./styles";
import { CreditCardInput } from "react-native-credit-card-input";

class Cartao extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    pedidoRequest: PropTypes.func.isRequired,
    setFormaPagamento: PropTypes.func.isRequired
  };

  state = {
    loading: false,
    cardData: {},
    validData: false,
    loadingPayment: false
  };

  componentWillMount() {}

  paginaInicial = () => {
    const { navigation } = this.props;
    navigation.navigate("Pagamento");
  };

  _onChange = form => {
    this.setState((s, p) => ({
      cardData: form,
      validData: form.valid
    }));
  };

  doPayment = async () => {
    this.setState({
      loadingPayment: true
    });

    const { totalAmount } = 0;
    const {
      cardData: { values: cardValue }
    } = this.state;
    const apiKey = "";
    const expMonth = cardValue.expiry.split("/")[0];
    const expYear = cardValue.expiry.split("/")[1];
    // Create a Stripe token with new card infos
    const dataToken = {
      number: cardValue.number.replace(" ", ""),
      exp_month: expMonth,
      exp_year: expYear,
      cvc: cardValue.cvc,
      address_zip: "01532001"
    };
    //Gerar o token na operadora!
    const token = true;
    if (token) {
      //Enviar ao backend
      const { pedidoRequest, setFormaPagamento } = this.props;
      setFormaPagamento("CARTAO");
      pedidoRequest();
    } else {
      //Erro!
    }
  };

  render() {
    return (
      <Container>
        <Header title="Forma de Pagamento" navigateTo={this.paginaInicial} />
        <ScrollView>
          <CreditCardInput
            autoFocus
            requiresName
            requiresCVC
            cardScale={1.0}
            labelStyle={{
              color: "black",
              fontSize: 12
            }}
            inputStyle={{
              fontSize: 16,
              color: "black"
            }}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            onChange={this._onChange}
          />
          {this.state.validData && (
            <Button
              onPress={() => this.doPayment()}
              disabled={!this.state.validData}
            >
              {this.state.loading ? (
                <Loading />
              ) : (
                <Text>Efetuar Pagamento</Text>
              )}
            </Button>
          )}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  perfil: state.perfil
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PedidoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cartao);
