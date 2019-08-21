import Router from "next/router";
import { all, call, fork, takeEvery } from "redux-saga/effects";

import { OPEN_SESSION_TALK_PAGE, OpenSessionTalkPageAction } from "./types";

function* handleOpenSessionTalkPage({
  payload: { talkId },
}: OpenSessionTalkPageAction) {
  const ROUTE = (code: string): string => `/talks/${encodeURI(code)}`;

  yield call(Router.push, ROUTE(talkId.value));
}

export function* watchOpenSessionTalkPage() {
  yield takeEvery(OPEN_SESSION_TALK_PAGE, handleOpenSessionTalkPage);
}

export function* saga() {
  yield all([fork(watchOpenSessionTalkPage)]);
}
