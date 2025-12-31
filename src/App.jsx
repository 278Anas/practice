import Counter from './component/state'
import User from './component/user'
import Student from './component/student';
import { useState } from 'react';
import Input from './component/input'
import Form from "./component/controlled_component";
import Skills from './component/checkbox';
import Radio from './component/radiodropdown';
import Map from './component/maploop';

function App() {

  // let userObj={
  //   name: "Anas",
  //   age: 24,
  //   email: "anas@gamil.com"
  // };

  // let collegeNames=["MIT","IIT","TTIO","AAI"]

  // const [student,setStudent]=useState("Ali");


  return (
    <>
      {/* <Counter/>
      <Input/> */}
      <Form/>
      <Skills/>
      <Radio/>
      <Map/>

      {/* {student && <Student name={student}/>}
      <button onClick={()=>setStudent("Anas")}>Show Student</button> */}
    </>
  )
}

export default App
