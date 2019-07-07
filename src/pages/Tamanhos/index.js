import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, TouchableOpacity } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as TamanhosActions } from "../../store/ducks/tamanhos";
import Container from "../../components/Container";
import Header from "../../components/Header";
import ListItem from "../../components/ItemLista";
import { Content, Loading, Error } from "./styles";

class Tamanhos extends Component {
  static propTypes = {
    tamanhoRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    tamanho: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          titulo: PropTypes.string,
          file: PropTypes.shape({
            url: PropTypes.string
          }),
          valor: PropTypes.number
        })
      ),
      loading: PropTypes.bool.isRequired,
      error: PropTypes.bool.isRequired
    }).isRequired,
    tamanhoSelected: PropTypes.func.isRequired
  };

  paginaAnterior = () => {
    const { navigation } = this.props;
    navigation.navigate("Tipos");
  };

  listarProdutos = () => {
    const { tamanho, tamanhoSelected } = this.props;
    return (
      <Content>
        {tamanho.data.map(item => (
          <TouchableOpacity key={item.id} onPress={() => tamanhoSelected(item)}>
            <ListItem
              titulo={item.titulo}
              uri={item.file.url}
              valor={item.valor}
            />
          </TouchableOpacity>
        ))}
        {tamanho.data.length == 0 && (
          <Error>Não existem produtos deste tamanho</Error>
        )}
      </Content>
    );
  };

  componentDidMount() {
    const { tamanhoRequest } = this.props;
    tamanhoRequest();
  }

  render() {
    const { tamanho } = this.props;

    return (
      <Container>
        <Header title="Selecione um tamanho" navigateTo={this.paginaAnterior} />
        {tamanho.error && (
          <Error>Houve um problema ao listar os produtos</Error>
        )}
        <ScrollView>
          {tamanho.loading ? <Loading /> : this.listarProdutos()}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  tamanho: state.tamanhos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TamanhosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tamanhos);
