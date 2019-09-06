import { Topic } from "@cuestion/ui";

export const OPEN_SESSION_TALK_PAGE = "@@talks/OPEN_SESSION_TALK_PAGE";
export const FILTER_SESSION_TOPICS_CHANGE =
  "@@talks/FILTER_SESSION_TOPICS_CHANGE";

export interface TalkId {
  value: string;
}

export interface OpenSessionTalkPageAction {
  type: typeof OPEN_SESSION_TALK_PAGE;
  payload: TalkId;
}

export interface ChangeFilterSessionTopicsAction {
  type: typeof FILTER_SESSION_TOPICS_CHANGE;
  payload: string[];
}

export interface TalksState {
  readonly filter: string[];
}

export type TalksActionTypes =
  | OpenSessionTalkPageAction
  | ChangeFilterSessionTopicsAction;
