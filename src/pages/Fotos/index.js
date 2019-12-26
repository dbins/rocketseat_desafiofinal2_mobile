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
import { PhotoGridLocal } from '../../components/PhotoGridLocal';

const photos = [
  { id: 1, url: require('../../assets/pizzaria1.jpg') },
  { id: 2, url: require('../../assets/pizzaria2.jpg')},
  { id: 3, url: require('../../assets/pizzaria3.jpg')},
  { id: 4, url: require('../../assets/pizzaria4.jpg')},
  { id: 5, url: require('../../assets/pizzaria5.jpg')},
  { id: 6, url: require('../../assets/pizzaria6.jpg')},
  { id: 7, url: require('../../assets/pizzaria7.jpg')},
  { id: 8, url: require('../../assets/pizzaria8.jpg')},
  { id: 9, url: require('../../assets/pizzaria9.jpg')}
];


class Fotos extends Component {
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
        <ProductHeader title="Fotos" />
		<ScrollView>
			<PhotoGridLocal PhotosList={photos} borderRadius={10} />
		</ScrollView>
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
)(Fotos);
