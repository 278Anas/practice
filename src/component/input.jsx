 import { useState } from "react";
 function Input(){

    const [val,setVal]=useState("Anas");

    return(
        <>
        <h1>Get Input Field</h1>
        <input type="text" value={val} onChange={(event)=>setVal(event.target.value)}  placeholder="Enter Your Name"  />
        <h1>{val}</h1>
        <button onClick={()=>setVal("")}>Clear</button>
        </>
    )
 }
 export default Input;