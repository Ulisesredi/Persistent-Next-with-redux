import * as types from "../types/actionTypes";

//Starts clock on server
export const ServerRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  });

//Starts clock on server
export const startClock = () => (dispatch) => {
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } });
  }, 1000);
};

//Counter actions
export const incrementCount = () => ({ type: types.INCREMENT });
export const decrementCount = () => ({ type: types.DECREMENT });
export const resetCount = () => ({ type: types.RESET });
