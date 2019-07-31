import { Session } from "../common/types";

export const OPEN_SESSION_REQUEST: string = "@session/OPEN_SESSION_REQUEST";
export const OPEN_SESSION_SUCCESS: string = "@session/OPEN_SESSION_SUCCESS";
export const OPEN_SESSION_FAILURE: string = "@session/OPEN_SESSION_FAILURE";

export interface SessionCode {
  value: string;
}

export interface ErrorMessage {
  message: string;
  timestamp: number;
}

interface OpenSessionRequestAction {
  type: typeof OPEN_SESSION_REQUEST;
  payload: SessionCode;
}

interface OpenSessionSuccessAction {
  type: typeof OPEN_SESSION_SUCCESS;
  payload: Session;
}

interface OpenSessionFailureAction {
  type: typeof OPEN_SESSION_FAILURE;
  payload: ErrorMessage;
}

export type SessionActionTypes = OpenSessionRequestAction | OpenSessionSuccessAction | OpenSessionFailureAction;
