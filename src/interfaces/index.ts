export interface ISession {
  _id: number;
  commands: Array<ICommand>;
  onRunCommand: (command: ICommand) => Promise<IBackendResponse>;
}

export interface ICommand {
  _id: number;
  session_id: number | null;
  command: string;
}

export interface IBackendResponse {
  status: number;
  result: string;
}
