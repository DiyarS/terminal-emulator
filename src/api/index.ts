import { ICommand, IBackendResponse } from "../interfaces";

export const sendCommand = ({
  command,
}: ICommand): Promise<IBackendResponse> => {
  return new Promise((resolve) => {
    console.log("Executing command: ", command);
    const sampleResponse = {
      status: 200,
      result: `Command ${command} executed successfully`,
    };

    setTimeout(() => {
      console.log("Finished command: ", command);
      resolve(sampleResponse);
    }, 3000);
  });
};
