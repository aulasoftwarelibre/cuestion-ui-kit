import { all, fork, takeEvery } from "redux-saga/effects";
import { OPEN_SESSION_REQUEST, OpenSessionRequestAction } from "./types";

export function* saga() {
  yield all([fork(watchOpenSessionRequest)]);
}

export function* handleOpenSessionRequest({ payload: { sessionCode } }: OpenSessionRequestAction) {
  // tslint:disable:no-console
  console.debug(`readed code in saga: ${sessionCode}. Awesome!`);
}

export function* watchOpenSessionRequest() {
  yield takeEvery(OPEN_SESSION_REQUEST, handleOpenSessionRequest);
}
