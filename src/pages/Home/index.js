import React, { Component } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ProdutoActions } from "../../store/ducks/produto";
import Container from "../../components/Container";
import ProductHeader from "../../components/HeaderHome";
import ProductList from "../../components/ListaHome";
import { Loading, Error } from "./styles";

class Home extends Component {
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

  categorias = () => {
    const { product, productSelected } = this.props;

    return (
      <ScrollView>
        {product.data.map(item => (
          <TouchableOpacity key={item.id} onPress={() => productSelected(item)}>
            <ProductList data={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  async componentWillMount() {
    const { productRequest } = this.props;
    await productRequest();
    this.props.exibir = this.props.product.data.length > 0;
  }

  render() {
    const { product, exibir } = this.props;
    return (
      <Container>
        <ProductHeader title="Pizzaria Don Juan" />
        {!exibir && <Error>Não existem categorias de produtos</Error>}
        {product.error && (
          <Error>Houve um problema ao listar os produtos</Error>
        )}
        {product.loading ? <Loading /> : this.categorias()}
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
)(Home);
