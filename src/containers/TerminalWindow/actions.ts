import { ICommand } from "../../interfaces";
import * as types from "./actionTypes";

export function onRunCommand(command: ICommand) {
  return { type: types.RUN_COMMAND_REQUEST, command };
}

export function onAddNewSession() {
  return { type: types.ADD_NEW_SESSION };
}

export function onRemoveSession(session_id: number) {
  return { type: types.REMOVE_SESSION, session_id };
}
