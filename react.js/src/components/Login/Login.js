import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import repository from "../../repository/repository";
import {Link, redirect} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
    }

    function validateForm() {

        return email.length > 0 && password.length > 0;

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        repository.login(email,password)
            .then((data)=>{
                redirect("/material")
            }).catch(()=>{
                redirect("/login?error=incorrectUsernameOrPassword")
        })
    }

    return (
        <div className="container mt-3">
            <form className="bg-dark p-3 text-white">
                <h1 className="h3 mb-3 font-weight-normal text-center">Login</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Username" required
                           value={email} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Password" required
                           value={password} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="text-center">
                    <button onClick={() => handleSubmit()} type="submit" className="mt-3 mb-3 btn btn-secondary"
                            disabled={!validateForm()}>Login
                    </button>
                </div>
                <div className={"text-center"}>
                    <Link to={"/register"}>Register</Link>
                </div>
            </form>
        </div>
    );
}
export default Login;