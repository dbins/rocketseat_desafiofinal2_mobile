import { call, put, select } from "redux-saga/effects";
import { navigate } from "../../services/navigation";

import api from "../../services/api";

import { Creators as TamanhosActions } from "../ducks/tamanhos";
import { Creators as CarrinhoActions } from "../ducks/carrinho";

export function* produtosTamanho() {
  try {
    const { id, produto_id } = yield select(
      state => state.tipos.productSelected
    );

    const { data } = yield call(
      api.get,
      `/produtos/${produto_id}/tipos/${id}/tamanhos`
    );

    yield put(TamanhosActions.tamanhoSuccess(data));
  } catch (err) {
    yield put(TamanhosActions.tamanhoFailure());
  }
}

export function* adicionarCarrinho(action) {
  try {
    const { data } = action.payload;
    const { id, produto_id } = yield select(
      state => state.tipos.productSelected
    );

    const produto_selecionado = yield select(
      state => state.tipos.productSelected
    );
    const produto = {
      produto_id: produto_selecionado.produto_id,
      produto_tipo_id: data.produto_tipo_id,
      produto_tamanho_id: data.id,
      titulo: produto_selecionado.titulo,
      tamanho: data.titulo,
      valor: Number(data.valor),
      imagem: data.file.url
    };

    yield put(CarrinhoActions.carrinhoAdd(produto));
    navigate("Carrinho");
  } catch (err) {
    yield put(TamanhosActions.tamanho.Failure());
  }
}
