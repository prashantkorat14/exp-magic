import * as types from "../constants/ActionTypes";

export const addExperiment = data => ({ type: types.ADD_EXPERIMENT, payload: data });
export const getAllExperiment = () => ({ type: types.GET_ALL_EXPERIMENT });

export const startExperiment = data => ({ type: types.START_EXPERIMENT, payload: data });
export const resetExperiment = () => ({ type: types.RESET_EXPERIMENT });
