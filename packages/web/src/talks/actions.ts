import { OPEN_SESSION_TALK_PAGE, FILTER_SESSION_TOPICS_CHANGE, TalksActionTypes, TalkId } from "./types";
import { Topic } from "@cuestion/ui";

export const openSessionTalkPage = (talkId: TalkId): TalksActionTypes => ({
  type: OPEN_SESSION_TALK_PAGE,
  payload: talkId,
});

export const changeFilterSessionTopics = (filter: string[]): TalksActionTypes => ({
  type: FILTER_SESSION_TOPICS_CHANGE,
  payload: filter,
});
