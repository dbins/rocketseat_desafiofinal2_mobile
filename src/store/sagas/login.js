import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { navigate } from "../../services/navigation";
import { OnLogin } from "../../services/token";

import { Creators as LoginActions } from "../ducks/login";

export function* login(action) {
  try {
    const { user } = action.payload;

    const { data } = yield call(api.post, "/sessions", user);
    OnLogin(data.token.token);

    yield put(LoginActions.loginSuccess());

    navigate("Home");
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}
