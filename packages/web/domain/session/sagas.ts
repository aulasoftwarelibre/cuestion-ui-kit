import Router from "next/router";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { searchByCode } from "../../api/session/search-by-code";
import * as actions from "./actions";
import {
  OPEN_SESSION_REQUEST,
  OPEN_SESSION_SUCCESS,
  OpenSessionRequestAction,
  OpenSessionSuccessAction
} from "./types";

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

export function* handleOpenSessionSuccess({ payload: { session } }: OpenSessionSuccessAction) {
  const ROUTE = (code: string): string => `/sessions/${encodeURI(code)}`;

  yield call(Router.push, ROUTE(session.code));
}

export function* watchOpenSessionRequest() {
  yield takeEvery(OPEN_SESSION_REQUEST, handleOpenSessionRequest);
  yield takeEvery(OPEN_SESSION_SUCCESS, handleOpenSessionSuccess);
}
