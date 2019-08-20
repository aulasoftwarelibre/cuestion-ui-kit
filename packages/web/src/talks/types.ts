export const OPEN_SESSION_TALK_PAGE = "@@session/OPEN_SESSION_TALK_PAGE";

export interface TalkId {
  value: string;
}

export interface OpenSessionTalkPageAction {
  type: typeof OPEN_SESSION_TALK_PAGE;
  payload: {
    talkId: TalkId;
  };
}

export type TalkActionTypes = OpenSessionTalkPageAction;
