import { ADD_EXPERIMENT, GET_ALL_EXPERIMENT } from "../constants/ActionTypes";

let experiments = localStorage.getItem("experiments") || "[]";
const initialState = {
  ...JSON.parse(experiments)
};

export default (state = initialState, { type, payload }) => {
  // export default (state = initialState, action) => {
  switch (type) {
    case ADD_EXPERIMENT:
      state[new Date().getTime()] = payload;
      localStorage.setItem("experiments", JSON.stringify({ ...state }));
      return { ...state };

    case GET_ALL_EXPERIMENT:
      return { ...state };

    default:
      return state;
  }
};
