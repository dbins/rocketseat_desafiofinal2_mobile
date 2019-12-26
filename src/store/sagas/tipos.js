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

export function* searchProducts(action) {
  
  try {
    const response = yield call(api.post, '/busca', {produto: action.payload.search.produto});
	console.tron.log(response.status);
	console.tron.log(response.data);
    if (response.status >= 200 && response.status < 300) {
		console.tron.log('estou aqui');
      yield put(TiposActions.searchSuccess(response.data));
    } else {
      throw response;
    }
  } catch (error) {
    yield put(TiposActions.searchFailed(error));
  }
}