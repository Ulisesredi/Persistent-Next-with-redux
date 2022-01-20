import * as types from "./type";

const initialState = {
  server: "",
  client: "",
  counter: 0,
};

// Creating my reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, counter: action.payload };
    case types.DECREMENT:
      return { ...state, counter: action.payload };
    case types.RESET:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}
