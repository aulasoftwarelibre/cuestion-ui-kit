import { Reducer } from "redux";
import { OPEN_SESSION_SUCCESS, SessionActionTypes, SessionState } from "./types";

const initialState: SessionState = {};

const reducer: Reducer<SessionState, SessionActionTypes> = (
  state: SessionState = initialState,
  action: SessionActionTypes
): SessionState => {
  switch (action.type) {
    case OPEN_SESSION_SUCCESS:
      return {
        ...state,
        session: action.payload.session
      };
    default:
      return state;
  }
};

export { reducer as sessionReducer };
