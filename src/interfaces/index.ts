export interface ISession {
  _id: string;
  index: number;
  isStretched: boolean;
  sessionsTotalCount: number;
  commands: Array<ICommand>;
  onRunCommand: (command: ICommand) => Promise<IBackendResponse>;
  onAddNewSession: () => void;
  onRemoveSession: (_id: string) => void;
}

export type ISessionEntity = Pick<ISession, "_id" | "commands">;

export interface ICommand {
  _id: string;
  session_id: string | null;
  command: string;
}

export interface IBackendResponse {
  status: number;
  result: string;
}
