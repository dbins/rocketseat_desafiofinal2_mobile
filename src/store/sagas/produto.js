import { call, put } from "redux-saga/effects";

import api from "../../services/api";

import { Creators as ProdutoActions } from "../ducks/produto";

export function* categorias() {
  try {
    const { data } = yield call(api.get, "/produtos");
    yield put(ProdutoActions.productSuccess(data));
  } catch (err) {
    yield put(ProdutoActions.productFailure());
  }
}
