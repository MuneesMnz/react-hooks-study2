import React, { useReducer } from "react";

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialstate;

    default:
      return state;
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialstate);
  return (
    <div>
      <h3>Counter Three</h3>
      <div>Count One -{count}</div>
      <button onClick={() => dispatch("increment")}>Incriment</button>
      <button onClick={() => dispatch("decrement")}>Decriment</button>
      <button onClick={() => dispatch("reset")}>Reset </button>
      <div>Count Two -{countTwo}</div>
      <button onClick={() => dispatchTwo("increment")}>Incriment</button>
      <button onClick={() => dispatchTwo("decrement")}>Decriment</button>
      <button onClick={() => dispatchTwo("reset")}>Reset </button>
    </div>
  );
};

export default CounterThree;
