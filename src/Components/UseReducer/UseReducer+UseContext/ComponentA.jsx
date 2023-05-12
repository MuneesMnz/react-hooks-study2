import React, { useContext } from "react";
import ComponentB from "./ComponentB";
import { CounterContext } from "../../../App";

const ComponentA = () => {
  // UseContext + UseReducer
  // ---------------------
  //   // const CountContext = useContext(CounterContext);
  //   return (
  //     <div>
  //       <div>Component A - {CountContext.countState}</div>
  //       <button onClick={() => CountContext.countDispatch("incriment")}>
  //         Incriment
  //       </button>
  //       <button onClick={() => CountContext.countDispatch("decriment")}>
  //         Decriment
  //       </button>
  //       <button onClick={() => CountContext.countDispatch("reset")}>
  //         Reser
  //       </button>
  //     </div>
  //   );
};

export default ComponentA;
