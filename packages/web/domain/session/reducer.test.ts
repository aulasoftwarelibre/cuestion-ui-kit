import { Session } from "../common/types";
import { openSessionSuccess } from "./actions";
import { reducer } from "./reducer";
import * as types from "./types";

describe("session reducer", () => {

  it("should return the initial state", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const action = {} as types.SessionActionTypes;

    expect(reducer(undefined, action)).toEqual({});
  });

  it("should handle OPEN_SESSION_SUCCESS", () => {
    const session : Session = {
      id: '1',
      code: '1234',
      title: 'My session'
    };

    expect(
      reducer(undefined, openSessionSuccess(session))
    ).toEqual({
      session
    })
  })
});
