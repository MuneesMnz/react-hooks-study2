import React, { useContext } from 'react'
import { CounterContext } from '../../../App';

const ComponentD = () => {
  const CountContext = useContext(CounterContext);
  return (
    <div>
      <div>Component D -{CountContext.countState}</div>
      <button onClick={() => CountContext.countDispatch("incriment")}>
        Incriment
      </button>
      <button onClick={() => CountContext.countDispatch("decriment")}>
        Decriment
      </button>
      <button onClick={() => CountContext.countDispatch("reset")}>
        Reser
      </button>
    </div>
  );
};
export default ComponentD
