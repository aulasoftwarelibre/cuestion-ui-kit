import Router from "next/router";
import { all, call, fork, takeEvery } from "redux-saga/effects";

import { FILTER_SESSION_TOPICS_CHANGE, TopicActionTypes, Topics } from "./types";

function* handleChangeFilterSessionTopics({
  payload: { Topics },
}: ChangeFilterSessionTopics) {
  const ROUTE = (code: string): string => `/talks/${encodeURI(code)}`;

  yield call(Router.push, ROUTE(Topics.value));
}

export function* watchOpenSessionTalkPage() {
  yield takeEvery(OPEN_SESSION_TALK_PAGE, handleOpenSessionTalkPage);
}

export function* saga() {
  yield all([fork(watchOpenSessionTalkPage)]);
}
