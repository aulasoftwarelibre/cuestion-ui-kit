import { Session } from "../common/types";
import {
  ErrorMessage,
  OPEN_SESSION_FAILURE,
  OPEN_SESSION_REQUEST,
  OPEN_SESSION_SUCCESS,
  SessionActionTypes,
  SessionCode
} from "./types";

export function openSessionRequest(sessionCode: SessionCode): SessionActionTypes {
  return {
    type: OPEN_SESSION_REQUEST,
    payload: sessionCode
  };
}

export function openSessionSuccess(session: Session): SessionActionTypes {
  return {
    type: OPEN_SESSION_SUCCESS,
    payload: session
  };
}

export function openSessionFailure(errorMessage: ErrorMessage): SessionActionTypes {
  return {
    type: OPEN_SESSION_FAILURE,
    payload: errorMessage
  };
}
