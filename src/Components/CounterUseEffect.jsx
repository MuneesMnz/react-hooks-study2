import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const CounterUseEffect = () => {
    const [count,setCount]=useState(0)

    const tick=()=>{
        setCount(prev=>prev +1)
    }
    useEffect(()=>{
        const intervel=setInterval(tick,1000)
        return ()=>{
            clearInterval(intervel)
        }
    },[])
  return (
    <div style={{textAlign:"center"}}>
      <h2>Counter</h2>
      <p>{count}</p>
    </div>
  )
}

export default CounterUseEffect
