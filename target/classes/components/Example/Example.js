import React, { useContext } from "react";
import {UserContext } from '../Login/UserContex';


function Example (props) {
    const { example } = props;
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Example Component: </h1>
            <ul>
                {example.map((item) => (
                    <li key={item.id}>
                        <p>ID: {item.id}</p>
                        <p>Name: {item.name}</p>
                        <p>Number: {item.number}</p>
                        <p>{user.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Example;
