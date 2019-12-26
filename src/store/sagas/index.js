import { all, takeLatest } from 'redux-saga/effects';

import { Types as CadastroTypes } from '../ducks/cadastro';
import { Types as LoginTypes } from '../ducks/login';
import { Types as ProdutoTypes } from '../ducks/produto';
import { Types as TiposTypes } from '../ducks/tipos';
import { Types as TamanhoTypes } from '../ducks/tamanhos';
import { Types as CarrinhoTypes } from '../ducks/carrinho';
import { Types as PerfilTypes } from '../ducks/perfil';
import { Types as PedidoTypes } from '../ducks/pedido';

import { cadastro } from './cadastro';
import { login, login_social, logout } from './login';
import { categorias } from './produto';
import { produtosTipo, searchProducts } from './tipos';
import { produtosTamanho, adicionarCarrinho } from './tamanhos';
import { adicionarPedido } from './carrinho';
import { pedidosUsuario } from './perfil';
import { getCEP, criarPedido } from './pedido';

export default function* rootSaga() {
  return yield all([
    takeLatest(CadastroTypes.REQUEST, cadastro),

    takeLatest(LoginTypes.REQUEST, login),
	takeLatest(LoginTypes.LOGOUT, logout),

    takeLatest(LoginTypes.REQUEST_SOCIAL, login_social),

    takeLatest(ProdutoTypes.REQUEST, categorias),

    takeLatest(TiposTypes.REQUEST, produtosTipo),
	
	takeLatest(TiposTypes.SEARCH_REQUEST, searchProducts),

    takeLatest(TamanhoTypes.REQUEST, produtosTamanho),

    takeLatest(TamanhoTypes.SELECTED, adicionarCarrinho),

    takeLatest(CarrinhoTypes.ADD_TO_ORDER, adicionarPedido),

    takeLatest(PedidoTypes.CEP_REQUEST, getCEP),

    takeLatest(PedidoTypes.REQUEST, criarPedido),

    takeLatest(PerfilTypes.REQUEST, pedidosUsuario)
  ]);
}
