import React, { useEffect, useRef } from 'react'

const FocusInput = () => {

    const inputRef=useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[])

  return (
    <div>
      <input ref={inputRef} type='text' />
      abc
    </div>
  )
}

export default FocusInput
