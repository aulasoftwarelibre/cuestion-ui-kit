import { openSessionSuccess } from "./actions";
import { sessionReducer as reducer } from "./reducer";
import * as types from "./types";

describe("session reducer", () => {
  it("should return the initial state", () => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const action = {} as types.SessionActionTypes;

    expect(reducer(undefined, action)).toEqual({
      error: false,
    });
  });
});
