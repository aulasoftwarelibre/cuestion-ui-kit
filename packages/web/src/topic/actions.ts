import { FILTER_SESSION_TOPICS_CHANGE, TopicActionTypes, Topics } from "./types";

export const ChangeFilterSessionTopics = (topics: Topics): TopicActionTypes => ({
  type: FILTER_SESSION_TOPICS_CHANGE,
  payload: {
    topics,
  },
});
