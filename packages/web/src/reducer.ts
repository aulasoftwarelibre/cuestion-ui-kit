import { combineReducers, Reducer } from "redux";
import { sessionReducer } from "./session/reducer";
import { SessionState } from "./session/types";

import { talksReducer } from "./talks/reducer";
import { TalksState } from "./talks/types";

export const reducer: Reducer<State> = combineReducers({
  session: sessionReducer,
  talks: talksReducer,
});

export interface State {
  readonly session: SessionState;
  readonly talks: TalksState;  
}
