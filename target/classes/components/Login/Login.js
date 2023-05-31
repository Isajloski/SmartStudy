import React, { useState, useEffect } from "react";
import axios from "axios";
import {redirect} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            username: username,
            password: password,
        };

        axios
            .post(`http://localhost:8080/api/auth/signin?username=${username}&password=${password}`)
            .then((response) => {
                const userData = response.data;
                setUser(userData);
                localStorage.setItem('user', JSON.stringify(userData));

            })
            .catch((error) => {
                // Handle the error
            });

    };


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (

        <div className="container mt-3">
            <form className="bg-dark p-3 text-white" onSubmit={handleSubmit}>
                <h3 className="h3 mb-3 font-weight-normal text-center">Login</h3>
                <div>
                    <form className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    </form>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>

            {user && (
                <div>
                    <h2>Welcome, {user.username}!</h2>
                    <p>Login successful!</p>
                </div>
            )}

        </div>
    );
};

export default Login;