import { call, put } from "redux-saga/effects";

import api from "../../services/api";
import { Creators as PerfilActions } from "../ducks/perfil";

export function* pedidosUsuario() {
  try {
    const { data } = yield call(api.get, "pedidos/app/user");

    yield put(PerfilActions.perfilSuccess(data));
  } catch (erro) {
    yield put(PerfilActions.perfilFailure());
  }
}
