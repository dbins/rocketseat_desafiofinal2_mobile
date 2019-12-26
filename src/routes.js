import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Tipos from './pages/Tipos';
import Tamanhos from './pages/Tamanhos';
import Carrinho from './pages/Carrinho';
import Finalizar from './pages/Finalizar';
import Perfil from './pages/Perfil';
import Pagamento from './pages/Pagamento';
import Cartao from './pages/Pagamento/cartao';

import Inicial from './pages/Inicial';
import Fotos from './pages/Fotos';
import Redes from './pages/Redes';
import Avisos from './pages/Avisos';
import Pizzaria from './pages/Pizzaria';
import Mapa from './pages/Mapa';
import Pesquisa from './pages/Pesquisa';


const AppStack = createStackNavigator(
  {
	Inicial,
	Fotos,
	Redes,
	Avisos,
	Pizzaria,
	Mapa,
	Pesquisa,
	Home,
    Tipos,
    Tamanhos,
    Carrinho,
    Finalizar,
    Perfil,
    Pagamento,
    Cartao,
  },
  {
    headerMode: 'none',
  },
);
const AuthStack = createStackNavigator(
  {
    Login,
    Cadastro,
  },
  {
    headerMode: 'none',
  },
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
export default Routes;
