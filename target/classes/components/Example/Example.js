import React, { useContext } from "react";
import {UserContext } from '../Login/UserContex';


function Example () {
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Example Component: </h1>
            {user ? (
                <div>
                    <h2>Welcome, {user.username}!</h2>
                    <p>Login successful!</p>
                </div>
            ) : (
                <h2>Please log in to view the content.</h2>
            )}

        </div>
    );
}

export default Example;
