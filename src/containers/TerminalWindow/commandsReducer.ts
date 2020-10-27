import { IBackendResponse, ICommand } from "../../interfaces";
import * as types from "./actionTypes";

export function generateNewCommand(): ICommand {
  return {
    _id: Date.now(),
    session_id: null,
    command: "",
  };
}

const defaultState: Array<ICommand> = [generateNewCommand()];

interface IAction {
  type: string;
  command: ICommand;
  payload?: IBackendResponse;
}

export default (state: Array<ICommand> = defaultState, action: IAction) => {
  switch (action.type) {
    case types.RUN_COMMAND_REQUEST: {
      return state
        .map((c) => (c._id === action.command!._id ? action.command : c))
        .concat(generateNewCommand());
    }
    case types.RUN_COMMAND_RESULT: {
      const { command, payload } = action;
      const commandWithResult = {
        ...command,
        command: `${command.command} \n${payload?.result}`,
      };

      console.log(commandWithResult);

      const stateUpdates = state.map((c) =>
        c._id === commandWithResult._id ? commandWithResult : c
      );
      console.table(stateUpdates);

      return stateUpdates;
    }

    default:
      return state;
  }
};
