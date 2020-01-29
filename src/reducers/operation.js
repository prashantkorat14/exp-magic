import { START_EXPERIMENT, RESET_EXPERIMENT } from "../constants/ActionTypes";
import dataArr from "../components/process.json";

const initialState = { steps: [], allowToNew: true };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case START_EXPERIMENT:
      let processData = payload.map(selected => dataArr.processes.filter(appProcess => appProcess.id === selected)[0]);
      if (state.allowToNew) {
        return { steps: processData, allowToNew: false };
      } else {
        alert("Experiment is running, Please wait till current experiment completed");
        return {};
      }
    case RESET_EXPERIMENT:
      return { allowToNew: true };
    default:
      return state;
  }
};
