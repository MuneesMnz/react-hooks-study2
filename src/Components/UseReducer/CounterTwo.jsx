import React, { useReducer } from "react";
const initialstate = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value }; 
    case "reset":
      return initialstate;

    default:
      return state;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h3>Counter Two</h3>
      <div>First Counter -{count.firstCounter}</div>
      <div>Second Counter -{count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        fisrt Incriment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        fisrt Decriment
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        second Incriment
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        second Decriment
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        fisrt Incriment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        fisrt Decriment 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset </button>
    </div>
  );
};

export default CounterTwo;
