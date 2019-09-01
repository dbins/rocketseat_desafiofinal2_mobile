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

const AppStack = createStackNavigator(
  {
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
