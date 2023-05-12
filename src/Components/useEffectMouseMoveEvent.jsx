import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectMouseMoveEvent = () => {
    const [x,setx]=useState(0)
    const [y,sety]=useState(0)

    const mouseMove=(e)=>{
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener('mousemove',mouseMove)

        return ()=>{
            window.removeEventListener('mousemove',mouseMove)
        }
    },[])
  return (
    <div style={{textAlign:"center"}}>
      <h2 >Hooks Mouse Change</h2>
      <p> X -{x} Y-{y}</p>
    </div>
  )
}

export default UseEffectMouseMoveEvent
