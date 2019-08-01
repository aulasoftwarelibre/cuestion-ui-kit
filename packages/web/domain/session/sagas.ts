import { all, fork, put, takeEvery } from "redux-saga/effects";
import { OPEN_SESSION_REQUEST, OpenSessionRequestAction } from "./types";

import * as actions from "./actions";

export function* saga() {
  yield all([fork(watchOpenSessionRequest)]);
}

export function* handleOpenSessionRequest({ payload: { sessionCode } }: OpenSessionRequestAction) {
  try {
    throw new Error("Sesión no disponible");
  } catch (errorMessage) {
    yield put(actions.openSessionFailure(errorMessage));
  }
}

export function* watchOpenSessionRequest() {
  yield takeEvery(OPEN_SESSION_REQUEST, handleOpenSessionRequest);
}
