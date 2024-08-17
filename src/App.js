import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

export function App(){
    const[users,setUsers] = useState([]);
    const[loading,setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            setLoading(false);
    })
    .catch(error => {
        console.log("not loading");
        setLoading(false);
    });
},[]);
if(loading){
    return <p>loading</p>;
}
return(
    <div>
        <h1>List of users in API</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
);
}
