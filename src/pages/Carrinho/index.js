import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { ScrollView, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as CarrinhoActions } from "../../store/ducks/carrinho";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Button from "../../components/Botao";

import { Content, ButtonContent, IconContent, CartIcon, Error } from "./styles";
import CartList from "../../components/Carrinho";

class Carrinho extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    carrinho: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          titulo: PropTypes.string,
          size: PropTypes.string,
          valor: PropTypes.number,
          imagem: PropTypes.string
        })
      )
    }).isRequired,
    carrinhoRemove: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    exibir: PropTypes.bool.isRequired,
    adicionarPedido: PropTypes.func.isRequired
  };

  redirecionar = page => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  listar = () => {
    const { carrinho, carrinhoRemove } = this.props;
    return (
      <Fragment>
        {carrinho.items.map(item => (
          <CartList
            key={Math.random()}
            data={item}
            remove={() => carrinhoRemove(item)}
          />
        ))}
      </Fragment>
    );
  };

  render() {
    const { total, exibir, adicionarPedido } = this.props;

    return (
      <Container>
        <Header
          title="Carrinho"
          navigateTo={() => this.redirecionar("Tamanhos")}
          totalValue={total}
        />
        <ScrollView>
          <Content>
            {exibir ? (
              this.listar()
            ) : (
              <Error>Não existem produtos no carrinho</Error>
            )}
          </Content>
        </ScrollView>
        <ButtonContent>
          <IconContent>
            <TouchableOpacity onPress={() => this.redirecionar("Home")}>
              <CartIcon name="cart-plus" size={20} />
            </TouchableOpacity>
          </IconContent>
          {exibir ? (
            <Button text="REALIZAR PEDIDO" onpress={() => adicionarPedido()} />
          ) : null}
        </ButtonContent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  carrinho: state.carrinho,
  exibir: state.carrinho.items.length > 0,
  total:
    state.carrinho.items.length > 0
      ? state.carrinho.items
          .map(item => item.valor)
          .reduce((prev, curr) => prev + curr)
      : 0
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CarrinhoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carrinho);
