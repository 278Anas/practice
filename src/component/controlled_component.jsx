import { useState } from "react";

function Form (){
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    function clearField(){
        setName("");
        setPassword("");
        setEmail("");
    }
    return(
        <>
        {/* <form action="" method="get"> */}
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
            <br /><br />
             <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Name" />
            <br /><br />
             <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Name" />
            <br /><br />

            <button>Submit</button>
            <br /><br />

            <button onClick={clearField}>Clear</button>

            <h3>{name}</h3>
            <h3>{password}</h3>
            <h3>{email}</h3>
            <hr />



        {/* </form> */}
         </>
    )

}
export default Form;