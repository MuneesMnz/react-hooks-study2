import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const Parent = () => {

    const [age,setAge]=useState(25)
    const [Salary,setSalary]=useState(50000)

    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementSalary=useCallback(()=>{
        setSalary(Salary+1000)
    },[Salary])

  return (
    <div>
      <Title />
      <Count text="Age" Count={age}  />
      <Button handleClick={incrementAge} >Increment Age</Button>
      <Count text="Salary" Count={Salary}  />
      <Button handleClick={incrementSalary} >Increment Salary</Button>
    </div>
  )
}

export default Parent
