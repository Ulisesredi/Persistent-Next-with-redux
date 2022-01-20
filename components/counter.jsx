import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../store/counter/action.js";

const Counter = () => {
  const globalState = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Count: <span>{globalState}</span>
      </h1>
      <button
        onClick={() => {
          dispatch(incrementCounter(globalState));
        }}
      >
        +1
      </button>
      <button onClick={() => dispatch(decrementCounter(globalState))}>
        -1
      </button>
      <button onClick={() => dispatch(resetCounter(globalState))}>Reset</button>
    </div>
  );
};

export default Counter;
