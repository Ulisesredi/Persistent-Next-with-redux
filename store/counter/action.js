import * as types from "./type";

export const incrementCounter = (incrementState) => (dispatch) => {
  const increase = incrementState + 1;

  return dispatch({
    type: types.INCREMENT,
    payload: increase,
  });
};

export const decrementCounter = (decrementState) => (dispatch) => {
  const decrease = decrementState - 1;

  return dispatch({
    type: types.DECREMENT,
    payload: decrease,
  });
};
export const resetCounter = () => (dispatch) => {
  const reset = 0;

  return dispatch({
    type: types.DECREMENT,
    payload: reset,
  });
};
