import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { OPEN_SESSION_REQUEST, OpenSessionRequestAction } from "./types";

import { searchByCode } from "../../api/session/search-by-code";
import * as actions from "./actions";

export function* saga() {
  yield all([fork(watchOpenSessionRequest)]);
}

export function* handleOpenSessionRequest({ payload: { sessionCode } }: OpenSessionRequestAction) {
  try {
    const {
      data: { id, code, title }
    } = yield call(searchByCode, sessionCode.value);

    yield put(actions.openSessionSuccess({ id, code, title }));
  } catch (errorMessage) {
    yield put(actions.openSessionFailure(errorMessage));
  }
}

export function* watchOpenSessionRequest() {
  yield takeEvery(OPEN_SESSION_REQUEST, handleOpenSessionRequest);
}
