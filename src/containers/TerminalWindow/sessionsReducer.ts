import { IBackendResponse, ICommand, ISession } from "../../interfaces";
import * as types from "./actionTypes";
import { uuid } from "../../utils/helpers";

export type IBaseSession = Pick<ISession, "_id" | "commands">;

export function generateNewCommand(session_id: string): ICommand {
  return {
    _id: uuid(),
    session_id,
    command: "",
  };
}

export function generateNewSession(): IBaseSession {
  const session_id = uuid();
  return {
    _id: session_id,
    commands: [generateNewCommand(session_id)],
  };
}

const defaultState = (): Array<IBaseSession> => {
  const sessionsCount = localStorage.getItem("sessions_count");
  const length =
    typeof sessionsCount === "string" ? parseInt(sessionsCount) : 1;
  const sessions = new Array(length).fill("");

  return sessions.map(() => generateNewSession());
};

interface IAction {
  type: string;
  command?: ICommand;
  session_id?: string;
  payload: IBackendResponse;
}

export default (
  state: Array<IBaseSession> = defaultState(),
  action: IAction
) => {
  switch (action.type) {
    case types.ADD_NEW_SESSION:
      return state.concat([generateNewSession()]);
    case types.REMOVE_SESSION:
      return state.filter((session) => session._id !== action.session_id);

    case types.RUN_COMMAND_REQUEST: {
      const sessionCommandsBelongTo = state.find(
        (session) => session._id === action.command?.session_id
      );

      if (!sessionCommandsBelongTo) return state;

      const sessionUpdatedCommands = sessionCommandsBelongTo?.commands
        .map((command: ICommand) =>
          command._id === action.command?._id ? action.command : command
        )
        .concat(generateNewCommand(sessionCommandsBelongTo?._id));

      const updatedSession: IBaseSession = {
        ...sessionCommandsBelongTo,
        commands: sessionUpdatedCommands,
      };
      const stateWithUpdates = state.map((session) =>
        session._id === updatedSession?._id ? updatedSession : session
      );

      return stateWithUpdates;
    }
    case types.RUN_COMMAND_RESULT: {
      const { command, payload } = action;
      const commandWithResult = {
        ...command,
        command: `${command?.command} \n${payload?.result}`,
      };

      const updateSessionCommands = (commands: Array<ICommand>) =>
        commands.map((c) =>
          c._id === action.command?._id ? commandWithResult : c
        );

      const updateSession = (session: IBaseSession) => ({
        ...session,
        commands: updateSessionCommands(session.commands),
      });

      const stateUpdates = state.map((session) =>
        session._id === command?.session_id ? updateSession(session) : session
      );

      return stateUpdates;
    }

    default:
      return state;
  }
};
