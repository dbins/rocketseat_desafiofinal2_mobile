import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Tipos from "./pages/Tipos";
import Tamanhos from "./pages/Tamanhos";
import Carrinho from "./pages/Carrinho";
import Finalizar from "./pages/Finalizar";
import Perfil from "./pages/Perfil";

const AppStack = createStackNavigator(
  {
    Home,
    Tipos,
    Tamanhos,
    Carrinho,
    Finalizar,
    Perfil
  },
  {
    headerMode: "none"
  }
);
const AuthStack = createStackNavigator(
  {
    Login: Login,
    Cadastro: Cadastro
  },
  {
    headerMode: "none"
  }
);

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);
export default Routes;
