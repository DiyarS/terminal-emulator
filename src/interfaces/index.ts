export interface ISession {
  _id: number;
  index: number;
  isStretched: boolean;
  sessionsTotalCount: number;
  commands: Array<ICommand>;
  onRunCommand: (command: ICommand) => Promise<IBackendResponse>;
  onAddNewSession: () => void;
  onRemoveSession: (_id: number) => void;
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
