import React, { useContext } from 'react'
import ComponentC from './ComponentC'
// import { MailContext, userContext } from '../../App'

const ComponentB = () => {

  // const user=useContext(userContext)
  // const mail=useContext(MailContext)
  return (
    <div>
      <ComponentC />
      {/* {user}-{mail.email} */}
    </div>
  )
}

export default ComponentB
