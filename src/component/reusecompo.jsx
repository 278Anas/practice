import { useState } from "react";

function UserData() {
  const userData = [
    { id: 1, name: "Anas", email: "anas@gmail.com", age: 24 },
    { id: 2, name: "Ali", email: "ali@gmail.com", age: 22 },
    { id: 3, name: "Ahmad", email: "ahmad@gmail.com", age: 20 },
    { id: 4, name: "Ahmer", email: "ahmer@gmail.com", age: 30 }
  ];

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>Reuse Component</h2>

      {userData.map((user) => (
        <div key={user.id} style={{ marginBottom: "10px",border:"1px solid green",padding:"3px",color:"green" }}>
          <h3>{user.id}</h3>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <h3>{user.age}</h3>
        </div>
      ))}
    </div>
  );
}

export default UserData;
