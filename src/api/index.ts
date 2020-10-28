import { ICommand, IBackendResponse } from "../interfaces";

export const sendCommand = ({
  command,
}: ICommand): Promise<IBackendResponse> => {
  return new Promise(async (resolve) => {
    console.log("Executing command: ", command);
    const response = await fetch("http://localhost:5000/api/hello");
    const body = await response.json();
    console.log(body);
    const sampleResponse = {
      status: 200,
      result: body.express,
    };

    resolve(sampleResponse);
    // setTimeout(() => {
    //   console.log("Finished command: ", command);
    //   resolve(sampleResponse);
    // }, 3000);
  });
};
