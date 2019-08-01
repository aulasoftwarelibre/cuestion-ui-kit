import * as actions from "./actions";
import * as types from "./types";

describe("actions", () => {
  it("should create an action to request a session by its code", () => {
    const sessionCode: types.SessionCode = {
      value: "1234"
    };
    const expectedAction = {
      type: types.OPEN_SESSION_REQUEST,
      payload: {
        sessionCode
      }
    };

    expect(actions.openSessionRequest(sessionCode)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to indicate success requesting a session", () => {
    const session: types.Session = {
      id: "1",
      code: "1234",
      title: "My session"
    };
    const expectedAction = {
      type: types.OPEN_SESSION_SUCCESS,
      payload: {
        session
      }
    };

    expect(actions.openSessionSuccess(session)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to indicate a failure requesting a session", () => {
    const errorMessage: Error = new Error("Session does not exists");
    const expectedAction = {
      type: types.OPEN_SESSION_FAILURE,
      payload: errorMessage,
      error: true
    };

    expect(actions.openSessionFailure(errorMessage)).toEqual(expectedAction);
  });
});
