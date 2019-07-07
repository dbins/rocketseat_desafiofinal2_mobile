import React, { Component } from "react";
import { Alert } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";
import validacao from "../../util";
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
import ImageLogo from "../../assets/logo.png";

class Login extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    loginRequest: PropTypes.func.isRequired,
    login: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.bool
    }).isRequired
  };

  state = {
    email: "",
    password: ""
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
      loginRequest({ email, password, origin });
    } else {
      Alert.alert("LOGIN", mensagem, [{ text: "FECHAR" }], {
        cancelable: false
      });
    }
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
