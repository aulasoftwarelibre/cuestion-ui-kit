import { Topic } from "@cuestion/ui";
import {
  FILTER_SESSION_TOPICS_CHANGE,
  OPEN_SESSION_TALK_PAGE,
  TalkId,
  TalksActionTypes,
} from "./types";

export const openSessionTalkPage = (talkId: TalkId): TalksActionTypes => ({
  type: OPEN_SESSION_TALK_PAGE,
  payload: talkId,
});

export const changeFilterSessionTopics = (
  filter: string[],
): TalksActionTypes => ({
  type: FILTER_SESSION_TOPICS_CHANGE,
  payload: filter,
});
