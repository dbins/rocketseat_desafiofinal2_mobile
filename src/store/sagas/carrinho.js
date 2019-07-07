import { put, select } from "redux-saga/effects";

import { Creators as PedidoActions } from "../ducks/pedido";

import { navigate } from "../../services/navigation";

export function* adicionarPedido() {
  const { items } = yield select(state => state.carrinho);
  yield put(PedidoActions.setProdutos(items));
  navigate("Finalizar");
}
