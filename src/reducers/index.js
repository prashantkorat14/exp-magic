import { combineReducers } from "redux";
// import todos from './todos'
// import visibilityFilter from './visibilityFilter'
import exp from "./exp";

import operation from "./operation";

const rootReducer = combineReducers({
  exp,
  operation
});

export default rootReducer;
