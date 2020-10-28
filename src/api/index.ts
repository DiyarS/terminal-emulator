import { ICommand, IBackendResponse } from "../interfaces";
import { getRequest, postRequest } from "./base";

export const sendCommand = async ({
  session_id,
  command,
}: ICommand): Promise<IBackendResponse> => {
  if (command === "history")
    return await getRequest("commands-history", { session_id });

  return await postRequest("command", { session_id, command });
};
