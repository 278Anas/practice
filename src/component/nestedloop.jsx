import { useState } from "react";
import Students from "./nestedstudent";

function Colleges() {
  const collegeData = [
    { name: "FAST", city: "Islamabad", website: "www.fast.com" },
    { name: "NUST", city: "Islamabad", website: "www.nust.com" },
    { name: "PUCIT", city: "Lahore", website: "www.pucit.com" },
    { name: "GCU", city: "Lahore", website: "www.gcu.com" },
  ];

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <h2>Reuse Component</h2>

      {collegeData.map((cname) => (
        <div
          key={cname.name}
          style={{
            marginBottom: "10px",
            border: "1px solid #756868ff",
            backgroundColor: "#ccc",
            padding: "6px",
            color: "#5e3838ff",
            borderRadius: "10px",
          }}
        >
          <h1>{cname.name}</h1>
          <ul>
            <li>
              <h2>{cname.city}</h2>
            </li>
            <li>
              <h2>{cname.website}</h2>
            </li>
            <li>
              <Students/>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Colleges;
