import { OPEN_SESSION_TALK_PAGE, TalkActionTypes, TalkId } from "./types";

export const openSessionTalkPage = (talkId: TalkId): TalkActionTypes => ({
  type: OPEN_SESSION_TALK_PAGE,
  payload: {
    talkId,
  },
});
