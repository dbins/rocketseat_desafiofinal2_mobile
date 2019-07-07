import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { ScrollView, TouchableOpacity } from "react-native";
import { Creators as TiposActions } from "../../store/ducks/tipos";
import Container from "../../components/Container";
import Header from "../../components/Header";
import { Content, Loading, Error } from "./styles";
import ListItem from "../../components/ItemLista";

class Tipos extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    tiposRequest: PropTypes.func.isRequired,
    tipos: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          titulo: PropTypes.string,
          file: PropTypes.shape({
            url: PropTypes.string
          }),
          loading: PropTypes.bool,
          error: PropTypes.bool
        })
      )
    }).isRequired,
    tiposSelected: PropTypes.func.isRequired
  };

  listarProdutos = () => {
    const { tipos, tiposSelected } = this.props;
    return (
      <Content>
        {tipos.data.map(item => (
          <TouchableOpacity key={item.id} onPress={() => tiposSelected(item)}>
            <ListItem titulo={item.titulo} uri={item.file.url} />
          </TouchableOpacity>
        ))}
        {tipos.data.length == 0 && (
          <Error>Não existem produtos deste tipo</Error>
        )}
      </Content>
    );
  };

  paginaInicial = () => {
    const { navigation } = this.props;
    navigation.navigate("Home");
  };

  async componentDidMount() {
    const { tiposRequest } = this.props;
    await tiposRequest();
    this.props.exibir = this.props.tipos.data.length > 0;
  }

  render() {
    const { tipos } = this.props;

    return (
      <Container>
        <Header title="Selecione um tipo" navigateTo={this.paginaInicial} />
        {tipos.error && <Error>Houve um problema ao listar os produtos</Error>}
        <ScrollView>
          {tipos.loading ? <Loading /> : this.listarProdutos()}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  tipos: state.tipos,
  produto: state.produto
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TiposActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tipos);
