import { takeEvery, call, put } from "redux-saga/effects";
import { sendCommand } from "../api";
import {
  RUN_COMMAND_REQUEST,
  RUN_COMMAND_RESULT,
} from "../containers/TerminalWindow/actionTypes";

export function* commandsSagaWatcher() {
  yield takeEvery(RUN_COMMAND_REQUEST, launchCommandsExecution);
}

function* launchCommandsExecution({ command }) {
  const result = yield call(sendCommand, command);

  yield put({ type: RUN_COMMAND_RESULT, payload: result, command });
}
