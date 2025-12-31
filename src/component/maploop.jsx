import { useState } from "react";

function Map(){

    const userData=[
        {
            id:1,
            name:"Anas",
            email:"anas@gmail.com",
            age:24,
        },
         {
            id:2,
            name:"Ali",
            email:"ali@gmail.com",
            age:22,

        },
         {
            id:3,
            name:"Ahmad",
            email:"ahmad@gmail.com",
            age:20,

        },
        {
            id:4,
            name:"Ahmer",
            email:"ahmer@gmail.com",
            age:30,

        }
    ]

    return(
        <div>
            <h2>Loops with Map function</h2>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user)=>(
                            <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Map;