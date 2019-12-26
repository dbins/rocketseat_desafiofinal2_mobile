import React, { Component } from "react";
import { TouchableOpacity, ScrollView, Text, View, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";
import Container from "../../components/Container";
import ProductHeader from "../../components/HeaderHome";
import ProductList from "../../components/ListaHome";
import { Loading, Error, ContainerBotoes, BotaoMeio, Imagem, TextoBotao} from "./styles";
import Carousel from "react-native-banner-carousel";
const BannerWidth = Dimensions.get("window").width;
const BannerHeight = 250;
const images = [
  require("../../assets/banner1.jpg"),
  require("../../assets/banner2.jpg"),
  require("../../assets/banner3.jpg")
];


class Inicial extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  };
  
  sair = () => {
	  this.props.logout();
  }

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{ width: BannerWidth, height: BannerHeight }}
          source={image}
        />
      </View>
    );
  }


  render() {
    return (
      <Container>
        <ProductHeader title="Pizzaria Don Juan" />
        <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
          >
            {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>
		<ScrollView>
		<ContainerBotoes>
            <BotaoMeio onPress={() => this.props.navigation.navigate('Pizzaria')}>
              <Imagem source={require('../../assets/don_juan_logo_small.png')} />
              <TextoBotao>A Pizzaria </TextoBotao>
            </BotaoMeio>
            <BotaoMeio onPress={() => this.props.navigation.navigate('Home')}>
              <Imagem source={require('../../assets/menu.png')}/>
              <TextoBotao>Menu</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
		  <ContainerBotoes>
            <BotaoMeio onPress={() => this.props.navigation.navigate('Fotos')}>
              <Imagem source={require('../../assets/picture.png')} />
              <TextoBotao>Fotos</TextoBotao>
            </BotaoMeio>
            <BotaoMeio onPress={() => this.props.navigation.navigate('Mapa')}>
              <Imagem source={require('../../assets/maps-and-flags.png')}/>
              <TextoBotao>Localização</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
		  <ContainerBotoes>
            <BotaoMeio onPress={() => this.props.navigation.navigate('Redes')}>
              <Imagem source={require('../../assets/social.png')}/>
              <TextoBotao>Redes Sociais</TextoBotao>
            </BotaoMeio>
			<BotaoMeio onPress={() => this.props.navigation.navigate('Avisos')}>
              <Imagem source={require('../../assets/email.png')}/>
              <TextoBotao>Avisos</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
		   <ContainerBotoes>
            <BotaoMeio onPress={() => this.props.navigation.navigate('Perfil')}>
              <Imagem source={require('../../assets/pedidos.png')}/>
              <TextoBotao>Pedidos</TextoBotao>
            </BotaoMeio>
			<BotaoMeio onPress={() => this.sair()}>
              <Imagem source={require('../../assets/sair.png')}/>
              <TextoBotao>Sair</TextoBotao>
            </BotaoMeio>
          </ContainerBotoes>
		  </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inicial);
