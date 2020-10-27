import { combineReducers } from "redux";
import commandsReducer from "../containers/TerminalWindow/commandsReducer";

const rootReducer = combineReducers({
  commands: commandsReducer,
});

export default rootReducer;
