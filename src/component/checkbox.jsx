import { useState } from "react";

function Skills(){

    const [skills,setSkills]=useState([]);
    const handleSkills=(event)=>{
       console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkills([...skills, event.target.value])
        }else{
            setSkills([...skills.filter((items)=>items!=event.target.value)])
        }
    }
    return(
        <div>
            <h2>Select Your Skills </h2>
        <input onChange={handleSkills} type="checkbox" name="PHP" id="php" value="php" />
        <label htmlFor="php">PHP</label>
        <br /><br />
        <input onChange={handleSkills} type="checkbox" name="js" id="js" value="js" />
        <label htmlFor="js">JS</label>
        <br /><br />
        <input onChange={handleSkills} type="checkbox" name="node" id="node" value="node" />
        <label htmlFor="node">Node</label>
        <br /><br />
        <input onChange={handleSkills} type="checkbox" name="react" id="react" value="react" />
        <label htmlFor="react">React</label>
        <br /><br />

        <h3>{skills.toString()}</h3>

        <hr />



        </div>
    )
}
export default Skills;