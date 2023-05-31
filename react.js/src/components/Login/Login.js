import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {UserContext} from "./UserContex";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { user, setUser } = useContext(UserContext); // Accessing setUser from UserContext
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            username: username,
            password: password,
        };


        axios
            .post('http://localhost:8080/api/auth/signin', formData)
            .then((response) => {

                const userData = response.data;
                setUser(userData);
                props.getUser(userData)
                //const token = response.headers['set-cookie'][0].split(';')[0].split('=')[1];
                const jsonResponse = response.data;


                localStorage.setItem('User', JSON.stringify(jsonResponse));
                //localStorage.setItem('token', token);

                navigate('/');

            })
            .catch((error) => {
                // Handle the error
                console.error('Error:', error);
            });

    };



    return (

        <div className="container mt-3">
            <form className="bg-dark p-3 text-white" onSubmit={handleSubmit}>
                <h3 className="h3 mb-3 font-weight-normal text-center">Login</h3>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
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