import * as actions from "./actions";
import * as types from "./types";

describe("actions", () => {
  it("should create an action to request a session by its code", () => {
    const sessionCode = {
      value: "1234"
    };
    const expectedAction = {
      type: types.OPEN_SESSION_REQUEST,
      payload: sessionCode
    };

    expect(actions.openSessionRequest(sessionCode)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to indicate success requesting a session", () => {
    const session = {
      id: "1",
      code: "1234",
      title: "My session"
    };
    const expectedAction = {
      type: types.OPEN_SESSION_SUCCESS,
      payload: session
    };

    expect(actions.openSessionSuccess(session)).toEqual(expectedAction);
  });
});

describe("actions", () => {
  it("should create an action to indicate a failure requesting a session", () => {
    const errorMessage = {
      message: "Session does not exists",
      timestamp: 1
    };
    const expectedAction = {
      type: types.OPEN_SESSION_FAILURE,
      payload: errorMessage
    };

    expect(actions.openSessionFailure(errorMessage)).toEqual(expectedAction);
  });
});
