import { Session } from "@cuestion/ui";
import {
  OPEN_SESSION_FAILURE,
  OPEN_SESSION_REQUEST,
  OPEN_SESSION_SUCCESS,
  SessionActionTypes,
  SessionCode,
} from "./types";

export const openSessionRequest = (
  sessionCode: SessionCode,
): SessionActionTypes => ({
  type: OPEN_SESSION_REQUEST,
  payload: {
    sessionCode,
  },
});

export const openSessionSuccess = (session: Session): SessionActionTypes => ({
  type: OPEN_SESSION_SUCCESS,
  payload: {
    session,
  },
});

export const openSessionFailure = (
  errorMessage: Error,
): SessionActionTypes => ({
  type: OPEN_SESSION_FAILURE,
  payload: errorMessage,
  error: true,
});
