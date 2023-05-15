import React, { useEffect, useRef, useState } from 'react'

const HookTimer = () => {

    const [timer,setTimer]=useState(0)

    const interval=useRef()
    useEffect(()=>{
    interval.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return ()=>{
            clearInterval(interval.current)
        }
    },[])

  return (
    <div>
        <p>HookTimer - {timer}</p>
        <button onClick={()=>clearInterval(interval.current)} >click</button>
    </div>
  )
}

export default HookTimer
