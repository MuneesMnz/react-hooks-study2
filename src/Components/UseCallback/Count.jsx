import React from 'react'

const Count = (props) => {
    const {text,Count}=props
    console.log("render "+text);
  return (
    <div>
      {text}-{Count}
    </div>
  )
}

export default React.memo(Count)
