import React, { useState } from 'react'
import useCounter from './Hooks/useCounter'

const CounterOne = () => {

    const [count,increment,decrement,reset]=useCounter(0,5)
    // const [count,setCount]=useState(0)

    // const increment=()=>{
    //     setCount(prev=>prev+1)
    // }
    // const decrement=()=>{
    //     setCount(prev=>prev-1)
    // }
    // const reset=()=>{
    //     setCount(0)
    // }
  return (
    <div>
      <p>Count -{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne
