import { combineReducers } from "redux";
import sessionsReducer from "../containers/TerminalWindow/sessionsReducer";

const rootReducer = combineReducers({
  sessions: sessionsReducer,
});

export default rootReducer;
