import { combineReducers } from 'redux';

import login from './login';
import cadastro from './cadastro';
import produto from './produto';
import tipos from './tipos';
import tamanhos from './tamanhos';
import carrinho from './carrinho';
import pedido from './pedido';
import perfil from './perfil';

export default combineReducers({
  login,
  cadastro,
  produto,
  tipos,
  tamanhos,
  carrinho,
  pedido,
  perfil,
});
