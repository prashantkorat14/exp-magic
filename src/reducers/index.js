import { combineReducers } from "redux";
import exp from "./exp";

import operation from "./operation";

const rootReducer = combineReducers({
  exp,
  operation
});

export default rootReducer;
