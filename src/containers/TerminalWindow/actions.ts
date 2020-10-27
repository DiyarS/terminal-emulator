import { ICommand } from "../../interfaces";
import * as types from "./actionTypes";

export function onRunCommand(command: ICommand) {
  return { type: types.RUN_COMMAND_REQUEST, command };
}
