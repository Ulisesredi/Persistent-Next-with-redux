import * as types from "../../types/actionTypes";

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
