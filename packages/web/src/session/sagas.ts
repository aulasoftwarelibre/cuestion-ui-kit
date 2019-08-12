import Router from "next/router";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { searchByCode } from "../../api/session/search-by-code";
import { openSessionFailure, openSessionSuccess } from "./actions";
import {
  OPEN_SESSION_REQUEST,
  OPEN_SESSION_SUCCESS,
  OpenSessionRequestAction,
  OpenSessionSuccessAction,
} from "./types";

export function* saga() {
  yield all([fork(watchOpenSessionRequest)]);
  yield all([fork(watchOpenSessionSuccess)]);
}

export function* watchOpenSessionRequest() {
  yield takeEvery(OPEN_SESSION_REQUEST, handleOpenSessionRequest);
}

export function* watchOpenSessionSuccess() {
  yield takeEvery(OPEN_SESSION_SUCCESS, handleOpenSessionSuccess);
}

function* handleOpenSessionRequest({
  payload: { sessionCode },
}: OpenSessionRequestAction) {
  try {
    const {
      data: { id, code, title, logo },
    } = yield call(searchByCode, sessionCode.value);

    yield put(openSessionSuccess({ id, code, title, logo }));
  } catch (errorMessage) {
    yield put(openSessionFailure(errorMessage));
  }
}

function* handleOpenSessionSuccess({
  payload: { session },
}: OpenSessionSuccessAction) {
  const ROUTE = (code: string): string => `/sessions/${encodeURI(code)}`;

  yield call(Router.push, ROUTE(session.code));
}
