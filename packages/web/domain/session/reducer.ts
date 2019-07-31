import {
  OPEN_SESSION_FAILURE,
  OPEN_SESSION_REQUEST,
  OPEN_SESSION_SUCCESS,
  SessionActionTypes,
  SessionState
} from "./types";

const initialState: SessionState = {
  error: false
};

export function sessionReducer(state = initialState, action: SessionActionTypes): SessionState {
  switch (action.type) {
    case OPEN_SESSION_REQUEST:
      return {
        ...action.payload,
        error: false
      };
    case OPEN_SESSION_FAILURE:
      return {
        ...action.payload,
        error: true
      };
    case OPEN_SESSION_SUCCESS:
    // no break
    default:
      return state;
  }
}
