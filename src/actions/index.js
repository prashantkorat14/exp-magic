import * as types from "../constants/ActionTypes";

export const addTodo = text => ({ type: types.ADD_TODO, text });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS });
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED });
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter });

export const addExperiment = data => ({ type: types.ADD_EXPERIMENT, payload: data });
export const getAllExperiment = () => ({ type: types.GET_ALL_EXPERIMENT });

export const startExperiment = data => ({ type: types.START_EXPERIMENT, payload: data });
export const resetExperiment = () => ({ type: types.RESET_EXPERIMENT });
