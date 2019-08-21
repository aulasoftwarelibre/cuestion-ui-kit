import { Topic } from "@cuestion/ui";

export const FILTER_SESSION_TOPICS_CHANGE = "@@session/FILTER_SESSION_TOPICS_CHANGE";

export interface Topics {
  value: Topic[];
}

export interface ChangeFilterSessionTopicsAction {
  type: typeof FILTER_SESSION_TOPICS_CHANGE;
  payload: {
    topics: Topics;
  };
}

export type TopicActionTypes = ChangeFilterSessionTopicsAction;
