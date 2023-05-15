import React, { useEffect, useState } from 'react'
import useDocumentTitle from './Hooks/useDocumentTitle'

const DocTitleOne = () => {

    const [count,setCount]=useState(0)

    // useEffect(()=>{
    //     document.title=`Count ${count}`
    // },[count])

    useDocumentTitle(count)


  return (
    <div>
      <button onClick={()=>setCount(prev=>prev+1)} >Count-{count}</button>
    </div>
  )
}

export default DocTitleOne
