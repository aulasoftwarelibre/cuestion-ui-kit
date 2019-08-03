import Router from "next/router";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { call } from "redux-saga/effects";
import { searchByCode } from "../../api/session/search-by-code";
import { watchOpenSessionRequest, watchOpenSessionSuccess } from "./sagas";
import { OPEN_SESSION_FAILURE, OPEN_SESSION_REQUEST, OPEN_SESSION_SUCCESS } from "./types";

describe("session sagas", () => {
  const session = { id: "ID", code: "CODE", title: "TITLE" };

  it("should dispatch success action when session code exists", () => {
    return expectSaga(watchOpenSessionRequest)
      .provide([[call(searchByCode, "CODE"), { data: session }]])
      .put({
        type: OPEN_SESSION_SUCCESS,
        payload: { session }
      })
      .dispatch({
        type: OPEN_SESSION_REQUEST,
        payload: { sessionCode: { value: "CODE" } }
      })
      .silentRun();
  });

  it("should dispatch error action when session code does not exist", () => {
    const error = Error("Not found");
    return expectSaga(watchOpenSessionRequest)
      .provide([[call(searchByCode, "CODE"), throwError(error)]])
      .put({
        type: OPEN_SESSION_FAILURE,
        error: true,
        payload: error
      })
      .dispatch({
        type: OPEN_SESSION_REQUEST,
        payload: { sessionCode: { value: "CODE" } }
      })
      .silentRun();
  });

  it("should open session page", () => {
    return expectSaga(watchOpenSessionSuccess)
      .provide([[matchers.call.fn(Router.push), "/sessions/CODE"]])
      .call(Router.push, "/sessions/CODE")
      .dispatch({
        type: OPEN_SESSION_SUCCESS,
        payload: { session }
      })
      .silentRun();
  });
});
