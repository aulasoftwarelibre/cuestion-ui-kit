import { Reducer } from "redux";
import {
  FILTER_SESSION_TOPICS_CHANGE,
  TalksActionTypes,
  TalksState,
} from "./types";

const initialState: TalksState = {
  filter: [],
};

const reducer: Reducer<TalksState, TalksActionTypes> = (
  state: TalksState = initialState,
  action: TalksActionTypes,
): TalksState => {
  switch (action.type) {
    case FILTER_SESSION_TOPICS_CHANGE:
      return {
        filter: action.payload
      };
    default:
      return state;
  }
};

export { reducer as talksReducer };
