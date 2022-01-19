import { combineReducers } from "redux";
import * as types from "../types/actionTypes";

//Counter reducer
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};

//Initial timer state
const initialTimerState = {
  lastUpdate: 0,
  light: false,
};

//Timer reducer
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
};

//Combined reducers
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
};

export default combineReducers(reducers);
