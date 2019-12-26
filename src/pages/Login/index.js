import React, { Component } from "react";
import { Alert } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";
import validacao from "../../util";
import {
  googleSignIn,
  googleGetCurrentUser,
  googleSignOut,
  googleRevokeAccess
} from "../../services/google";
import {
  LoginButton,
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";
import { facebookLogin } from "../../services/facebook";
import DeviceInfo from "react-native-device-info";
import {
  ImageBackground,
  Container,
  ContainerLogo,
  Logo,
  Form,
  Input,
  Button,
  Text,
  LinkText,
  Loading
} from "./styles";
import BackgroundLogin from "../../assets/background_login.png";
import ImageLogo from "../../assets/don_juan_logo_big.png";

// Recurso nao testado
// <Button onPress={this.login_google}>
// {this.state.loading_google ? (
// <Loading />
// ) : (
//   <Text>Login com Google</Text>
// )}
// </Button>

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    loginRequest: PropTypes.func.isRequired,
    loginRequestSocial: PropTypes.func.isRequired,
    login: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.bool
    }).isRequired
  };

  state = {
    email: "",
    password: "",
    username: "",
    error: "",
    user: null,
    social_id: null,
    social_origem: null,
    loading_google: false,
    loading_facebook: false
  };

  cadastro = () => {
    const { navigation } = this.props;
    navigation.navigate("Cadastro");
  };

  autenticar = () => {
    const { loginRequest } = this.props;
    const { email, password } = this.state;
    let continuar = true;
    let mensagem = "";
    if (email == "" || password == "") {
      continuar = false;
      mensagem = "Por favor informe o e-mail e a senha!";
    } else {
      if (!validacao.email_validate(email)) {
        continuar = false;
        mensagem = "O e-mail digitado é inválido";
      }
    }
    if (continuar) {
      const origin = "MOBILE";
      const api = DeviceInfo.getAPILevel();
      const marca = DeviceInfo.getBrand();
      const sistema = DeviceInfo.getSystemName();
      const versao = DeviceInfo.getSystemVersion();
      loginRequest({ email, password, origin, api, marca, sistema, versao });
    } else {
      Alert.alert("LOGIN", mensagem, [{ text: "FECHAR" }], {
        cancelable: false
      });
    }
  };

  autenticar_social = () => {
    console.tron.log("estou aqui");
    const { loginRequestSocial } = this.props;
    const { username, email, social_origem, social_id } = this.state;
    const origin = "MOBILE";
    const api = DeviceInfo.getAPILevel();
    const marca = DeviceInfo.getBrand();
    const sistema = DeviceInfo.getSystemName();
    const versao = DeviceInfo.getSystemVersion();
    this.setState({ loading_facebook: false, loading_google: false });
    loginRequestSocial({
      username,
      email,
      social_origem,
      social_id,
      origin,
      api,
      marca,
      sistema,
      versao
    });
  };

  login_facebook = async () => {
    this.setState({ loading_facebook: true, loading: false });
    const response = await facebookLogin();
    if (response.error) {
      //Se o tipo do erro foi token expirado, chamar de novo a rotina para gerar um token novo

      this.setState({ error: response.error, loading: false });
      return false;
    }

    this.setState({
      user: response.user,
      loading: false,
      error: "",
      social_id: response.user.id,
      email: response.user.email,
      username: response.user.name,
      social_origem: "FACEBOOK"
    });
    this.autenticar_social();
  };

  login_google = async () => {
    this.setState({ loading_google: true, loading: false });
    const response = await googleSignIn();
    if (response.error) {
      this.setState({ error: response.error, loading: false });
      return false;
    }
    this.setState({
      user: response.user,
      loading: false,
      error: "",
      social_id: response.user.id,
      email: response.user.email,
      username: response.user.name,
      social_origem: "GOOGLE"
    });
    this.autenticar_social();
  };

  render() {
    const { login } = this.props;
    const { email, password } = this.state;

    return (
      <ImageBackground source={BackgroundLogin}>
        <Container>
          <ContainerLogo>
            <Logo source={ImageLogo} />
          </ContainerLogo>
          <Form>
            <Input
              value={email}
              onChangeText={text => this.setState({ email: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu email"
              keyboardType="email-address"
            />
            <Input
              value={password}
              onChangeText={text => this.setState({ password: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Sua senha"
              secureTextEntry
            />
            <Button onPress={this.autenticar}>
              {login.loading ? <Loading /> : <Text>Entrar</Text>}
            </Button>
            <LinkText onPress={this.cadastro}>
              <Text>Criar conta gratuita</Text>
            </LinkText>

            <Button onPress={this.login_facebook}>
                <Text>Login com Facebook</Text>
            </Button>



            {login.error && (
              <LinkText>
                <Text>
                  Houve um erro ao efetuar login. Verifique sua conexão e os
                  dados informados
                </Text>
              </LinkText>
            )}
          </Form>
        </Container>
      </ImageBackground>
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
)(Login);
