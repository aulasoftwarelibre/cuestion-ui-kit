import { combineReducers, Reducer } from "redux";
import { sessionReducer } from "./domain/session/reducer";
import { SessionState } from "./domain/session/types";

export const reducer: Reducer<State> = combineReducers({
  session: sessionReducer
});

export interface State {
  readonly session: SessionState;
}
