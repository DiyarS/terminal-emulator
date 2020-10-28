import { Dispatch } from "redux";
import { ICommand } from "../../interfaces";
import { IBaseSession } from "./sessionsReducer";
import * as types from "./actionTypes";

export function onRunCommand(command: ICommand) {
  return { type: types.RUN_COMMAND_REQUEST, command };
}

export function onAddNewSession() {
  return (dispatch: Dispatch, getState: () => { sessions: [IBaseSession] }) => {
    const sessionsCount = getState().sessions.length;
    localStorage.setItem("sessions_count", (sessionsCount + 1).toString());

    dispatch({ type: types.ADD_NEW_SESSION });
  };
}

export function onRemoveSession(session_id: string) {
  const sessionsCount = localStorage.getItem("sessions_count");

  if (sessionsCount) {
    const newCount = parseInt(sessionsCount) - 1;
    localStorage.setItem("sessions_count", newCount.toString());
  }
  return { type: types.REMOVE_SESSION, session_id };
}
