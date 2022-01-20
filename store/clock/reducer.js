import * as types from "./type";

//Initial timer state
const initialTimerState = {
  lastUpdate: 0,
  light: false,
};

//Timer reducer
export default function timer(state = initialTimerState, { type, payload }) {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
}
