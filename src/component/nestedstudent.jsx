import { useState } from "react";
import Student from "./student";

function Students(){
    const studentData=["Anas","Ali","Ahmad","Ahamer"]
    return(
        <div>
            <h2>Students</h2>
            {
                studentData.map((student, index)=>(
                    <div key={index}>
                    <ul>
                        <li>
                            <h4>{student}</h4>
                        </li>
                    </ul>
                    </div>
                ))
            }

        </div>
    )
}export default Students;