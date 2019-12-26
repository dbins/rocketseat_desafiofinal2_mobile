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
import { WebView } from 'react-native-webview';

class Mapa extends Component {
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
    const { product, exibir } = this.props;
    return (
      <Container>
        <ProductHeader title="Localização" />
		<WebView
              source={{
                html:
                  '<iframe width="600" height="800" id="gmap_canvas" src="https://maps.google.com/maps?q=rua%20castro%20alves%20s%C3%A3o%20paulo%20sp&t=&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>',
              }}
              style={{
                marginTop: 20,
                marginBottom: 20,
                maxHeight: 700,
                width: 600,
				height: 800,
                flex: 1,
				backgroundColor: "#000000"
              }}
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
)(Mapa);
