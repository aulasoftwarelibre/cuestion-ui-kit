import { combineReducers, Reducer } from "redux";
import { sessionReducer } from "./session/reducer";
import { SessionState } from "./session/types";

export const reducer: Reducer<State> = combineReducers({
  session: sessionReducer,
});

export interface State {
  readonly session: SessionState;
}
