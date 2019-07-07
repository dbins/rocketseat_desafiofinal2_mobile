import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { OnLogin } from "../../services/token";
import { navigate } from "../../services/navigation";

import { Creators as CadastroAction } from "../ducks/cadastro";

export function* cadastro(action) {
  try {
    const { user } = action.payload;

    const { data } = yield call(api.post, "/users", user);
    OnLogin(data.token.token);

    yield put(CadastroAction.cadastroSuccess());

    navigate("Home");
  } catch (err) {
    yield put(CadastroAction.cadastroFailure());
  }
}
