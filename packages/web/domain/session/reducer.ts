import { AnyAction, Reducer } from "redux";
import { Session } from "../common/types";
import { OPEN_SESSION_SUCCESS, SessionCode } from "./types";

const initialState: State = {};

export const reducer: Reducer<State> = (state: State = initialState, action: AnyAction): State => {
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

export interface State {
  readonly sessionCode?: SessionCode;
  readonly session?: Session;
}
