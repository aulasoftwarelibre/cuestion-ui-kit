import { Reducer } from "redux";
import { OPEN_SESSION_FAILURE, OPEN_SESSION_SUCCESS, SessionActionTypes, SessionState } from "./types";

const initialState: SessionState = {
  error: false
};

const reducer: Reducer<SessionState, SessionActionTypes> = (
  state: SessionState = initialState,
  action: SessionActionTypes
): SessionState => {
  switch (action.type) {
    case OPEN_SESSION_SUCCESS:
      return {
        ...state,
        error: false,
        session: action.payload.session
      };
    case OPEN_SESSION_FAILURE:
      return {
        error: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export { reducer as sessionReducer };
