import { Session } from "../../common/types";
import {
  ErrorMessage,
  OPEN_SESSION_FAILURE,
  OPEN_SESSION_REQUEST,
  OPEN_SESSION_SUCCESS,
  SessionActionTypes,
  SessionCode
} from "../types";

export function openSessionRequest(code: SessionCode): SessionActionTypes {
  return {
    type: OPEN_SESSION_REQUEST,
    payload: code
  };
}

export function openSessionSuccess(session: Session): SessionActionTypes {
  return {
    type: OPEN_SESSION_SUCCESS,
    payload: session
  };
}

export function openSessionFailure(error: ErrorMessage): SessionActionTypes {
  return {
    type: OPEN_SESSION_FAILURE,
    payload: error
  };
}
