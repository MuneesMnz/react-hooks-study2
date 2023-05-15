import React, { useState } from "react";
import useInput from "./Hooks/useInput";

const UserFormTwo = () => {
  const [firstName, bindFirst, resetfirst] = useInput("");
  const [lastName, bindlast, resetlast] = useInput("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    alert(`First Name : ${firstName}, Last name :${lastName}`);
    resetfirst()
    resetlast()
  };
  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <div>
          <label>First name</label>
          <input
            {...bindFirst}
            type="text"
            
           
          />
        </div>
        <div>
          <label>Last name</label>
          <input
            {...bindlast}
            type="text"
            
          
          />
        </div>
        <button type="submit">Click</button>
      </form>
    </div>
  );
};

export default UserFormTwo;
