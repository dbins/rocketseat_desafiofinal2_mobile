import { call, put, select } from "redux-saga/effects";

import api from "../../services/api";
import consultaCEP from "../../services/cep";
import { navigate } from "../../services/navigation";
import { Creators as PedidoActions } from "../ducks/pedido";
import { Creators as CarrinhoActions } from "../ducks/carrinho";

export function* getCEP(action) {
  try {
    const cep = action.payload.cep;
    const response = yield call(consultaCEP.get, "/web_cep.php?cep=" + cep);
    const retorno = response.data;

    //Converter string texto em objeto...
    var vars = retorno.split("&");
    var resultados = {};
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      resultados[pair[0]] = pair[1];
    }

    const { uf, cidade, bairro, logradouro } = resultados;
    yield put(
      PedidoActions.cepResponse({ rua: logradouro, cidade, bairro, uf, cep })
    );
  } catch (err) {
    //ERRO CEP
  }
}

export function* criarPedido() {
  try {
    const { valor, observacao, endereco, forma_pagamento } = yield select(
      state => state.pedido
    );
    const data = yield select(state => state.pedido);
    const { items } = yield select(state => state.carrinho);

    yield call(api.post, "/pedidos", {
      observacao,
      rua: endereco.rua,
      numero: endereco.numero,
      cidade: endereco.cidade,
      bairro: endereco.bairro,
      cep: endereco.cep,
      estado: endereco.uf,
      produtos: items,
      valor,
      forma_pagamento
    });

    yield put(PedidoActions.pedidoResponse());
    yield put(CarrinhoActions.carrinhoClear({}));
    navigate("Home");
  } catch (err) {
    yield put(PedidoActions.pedidoFailure());
  }
}
