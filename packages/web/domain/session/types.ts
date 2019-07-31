import { Session } from "../common/types";

export const OPEN_SESSION_REQUEST = "@@session/OPEN_SESSION_REQUEST";
export const OPEN_SESSION_SUCCESS = "@@session/OPEN_SESSION_SUCCESS";
export const OPEN_SESSION_FAILURE = "@@session/OPEN_SESSION_FAILURE";

export interface SessionState {
  readonly sessionCode?: SessionCode;
  readonly session?: Session;
}

export interface SessionCode {
  value: string;
}

interface OpenSessionRequestAction {
  type: typeof OPEN_SESSION_REQUEST;
  payload: {
    sessionCode: SessionCode;
  };
}

interface OpenSessionSuccessAction {
  type: typeof OPEN_SESSION_SUCCESS;
  payload: {
    session: Session;
  };
}

interface OpenSessionFailureAction {
  type: typeof OPEN_SESSION_FAILURE;
  payload: Error;
  error: true;
}

export type SessionActionTypes = OpenSessionRequestAction | OpenSessionSuccessAction | OpenSessionFailureAction;
