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
import { ContainerPedidos, Title, Date, Value, Error } from "./styles";

class Perfil extends Component {
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

  componentWillMount() {
    const { perfilRequest } = this.props;
    perfilRequest();
  }

  paginaInicial = () => {
    const { navigation } = this.props;
    navigation.navigate("Inicial");
  };

  render() {
    const { perfil } = this.props;
    return (
      <Container>
        <Header title="Meus pedidos" navigateTo={this.paginaInicial} />
        {perfil.error && <Error>Houve um problema ao listar os pedidos</Error>}
        <ScrollView>
          {perfil.data.map(order => (
            <ContainerPedidos key={order.id}>
              <Title>Pedido #{order.id}</Title>
              <Date>{moment(order.created_at).fromNow()}</Date>
              <Value>R$ {order.valor}</Value>
            </ContainerPedidos>
          ))}
          {perfil.data.length == 0 && (
            <Error>Não foram localizados pedidos</Error>
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
  bindActionCreators(PerfilActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Perfil);
