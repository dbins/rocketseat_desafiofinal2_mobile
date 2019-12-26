import React, { Component } from "react";
import { Alert } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CadastroActions } from "../../store/ducks/cadastro";
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
import ImageLogo from "../../assets/don_juan_logo_big.png";

class Cadastro extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired,
    cadastroRequest: PropTypes.func.isRequired,
    cadastro: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.bool
    }).isRequired
  };

  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  };

  login = () => {
    const { navigation } = this.props;
    navigation.navigate("Login");
  };

  cadastrar = () => {
    const { username, email, password, passwordConfirm } = this.state;
    const { cadastroRequest } = this.props;

    let continuar = true;
    let mensagem = "";
    if (email == "" || password == "" || passwordConfirm == "") {
      continuar = false;
      mensagem = "Por favor preencha todos os campos!";
    } else {
      if (!validacao.email_validate(email)) {
        continuar = false;
        mensagem = "O e-mail digitado é inválido";
      }

      if (password !== passwordConfirm) {
        continuar = false;
        mensagem = "A senha e a confirmação de senha devem ser iguais";
      }
    }
    if (continuar) {
      cadastroRequest({
        username,
        email,
        password,
        password_confirmation: passwordConfirm
      });
    } else {
      Alert.alert("CADASTRO", mensagem, [{ text: "FECHAR" }], {
        cancelable: false
      });
    }
  };

  render() {
    const { username, email, password, passwordConfirm } = this.state;
    const { cadastro } = this.props;
    return (
      <ImageBackground source={BackgroundLogin}>
        <Container>
          <ContainerLogo>
            <Logo source={ImageLogo} />
          </ContainerLogo>
          <Form>
            <Input
              value={username}
              onChangeText={text => this.setState({ username: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome completo"
            />
            <Input
              value={email}
              onChangeText={text => this.setState({ email: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu email"
              autoCompleteType="email"
              keyboardType="email-address"
            />
            <Input
              value={password}
              onChangeText={text => this.setState({ password: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Senha secreta"
              secureTextEntry
            />
            <Input
              value={passwordConfirm}
              onChangeText={text => this.setState({ passwordConfirm: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Confirme a senha"
              secureTextEntry
            />
            <Button onPress={this.cadastrar}>
              {cadastro.loading ? <Loading /> : <Text>Criar Conta</Text>}
            </Button>
            <LinkText onPress={this.login}>
              <Text>Já tenho login</Text>
            </LinkText>
            {cadastro.error && (
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
  cadastro: state.cadastro
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CadastroActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cadastro);
