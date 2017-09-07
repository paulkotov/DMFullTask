import * as types from '../constants/ActionTypes';

export const addData = data => ({ type: types.ADD_DATA, data });
export const deleteData = () => ({ type: types.DELETE_DATA });

export const login = profile => ({ type: types.LOGIN, profile });
export const logout = () => ({ type: types.LOGOUT });
export const loadData = (savedData) => ({ type: types.LOADDATA, savedData });
