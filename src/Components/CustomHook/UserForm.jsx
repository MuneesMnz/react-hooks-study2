import React, { useState } from "react";

const UserForm = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const handleSubmit=e=>{
    e.preventDefault()
    alert(`First Name : ${first}, Last name :${last}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First name</label>
          <input
            type="text"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </div>
        <div>
          <label>Last name</label>
          <input
            type="text"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
        </div>
        <button type='submit'>Click</button>
      </form>
    </div>
  );
};

export default UserForm;
