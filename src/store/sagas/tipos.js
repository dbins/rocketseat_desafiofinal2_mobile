import { call, put, select } from "redux-saga/effects";

import api from "../../services/api";

import { Creators as TiposActions } from "../ducks/tipos";

export function* produtosTipo() {
  try {
    const { id } = yield select(state => state.produto.productSelected);

    const { data } = yield call(api.get, `/produtos/${id}/tipos`);

    yield put(TiposActions.tiposSuccess(data));
  } catch (err) {
    yield put(TiposActions.tiposFailure());
  }
}
