import { useState } from "react";

function Counter(){
    const [count, setCount]=useState(0);
    const [fruit, setfruit]=useState("Apple");

    const handleFruit=()=>{
        setfruit("Banana")
    }

   

    return(
        <div>
            <h1>{count}</h1>
             <h1>{fruit}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
             <button onClick={handleFruit}>Change Fruit</button>
        </div>
    )

}
export default Counter;