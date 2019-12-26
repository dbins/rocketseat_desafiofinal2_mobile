import React, { Component } from "react";
import { TouchableOpacity, ScrollView, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ProdutoActions } from "../../store/ducks/produto";
import Container from "../../components/Container";
import ProductHeader from "../../components/HeaderHome";
import ProductList from "../../components/ListaHome";
import { Loading, Error, Logo, Content, ContainerLogo, Titulo, Texto } from "./styles";
import ImageLogo from "../../assets/don_juan_logo_big.png";

class Pizzaria extends Component {
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
        <ProductHeader title="Pizzaria Don Juan" />
		 <ContainerLogo>
            <Logo source={ImageLogo} />
        </ContainerLogo>
		<Content>
        <Texto>A Pizzaria Don Juan surgiu em 2019.  Uma pizzaria jovem e dinâmica que hoje é a favorita da região.</Texto>
		<Texto>Foi escolhida no final de 2019 pelo jornal do bairro como a melhor pizzaria, um reconhecimento que valoriza todo o trabalho de nossa equipe.</Texto>
		<Texto>Venha nos conhecer!</Texto>
		<Texto>Atendimento</Texto>
		<Texto>Todos os dias das 11:00 as 23:00 exceto feriados</Texto>
		<Titulo>Nossos Valores</Titulo>
		<Texto>A Pizzaria Don Juan é comprometida com os seguintes princípios e valores:</Texto>
		<Texto>– Competência</Texto>
		<Texto>– Conhecimento</Texto>
		<Texto>– Criatividade</Texto>
		<Texto>– Trabalho em equipe</Texto>
		<Texto>– Higiene</Texto>
		<Texto>– Zelo pela qualidade</Texto>
		<Texto>– Cuidado com a aparência dos produtos</Texto>
		<Texto>– Excelência no atendimento</Texto>

		<Titulo>Nossa missão</Titulo>
		<Texto>- Oferecer alimentos saborosos e produtos de qualidade superior, garantindo a satisfação de nossos clientes</Texto>
		<Texto>- Sermos reconhecidos como líderes de mercado no segmento de pizzaria na região</Texto>
		</Content>
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
)(Pizzaria);
