import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function RegistrationForm() {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [studentIndex, setStudentIndex] = useState(null);
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [roles,setRoles] = useState([]);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

        if(id === "username"){
            setUsername(value);
        }
        if(id === "roles"){
            setRoles(value);
        }
        if(id === "studentIndex"){
            setStudentIndex(value);
        }

    }

    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log(firstName,lastName,username,email,password,roles);


        const formData = {
            username: username,
            email : email,
            role: roles,
            firs_name: firstName,
            last_name: lastName,
            city: "Skopje",
            country: "MKD",
            birthday: "2000-10-10",
            description: "Something interesting",
            password: password,
        };


        axios
            .post('http://localhost:8080/api/auth/signup', formData)
            .then((response) => {
                navigate('/login');
            })
            .catch((error) => {
                // Handle the error
                console.error('Error:', error);
            });


    }

    return(
        <div className="container mt-3">
            <form className="bg-dark h3 mb-3 font-weight-normal text-center p-3 text-white"  onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal text-center">Registration</h1>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="form-control" placeholder="First Name" required value={firstName} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="Last Name" required value={lastName} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="form-control" placeholder="Username" required value={username} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="studentIndex">Student Index</label>
                    <input type="number" id="studentIndex" className="form-control" placeholder="Your index" required value={studentIndex} onChange={(e) => handleInputChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Email" required value={email} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Password" required value={password} onChange={(e) => handleInputChange(e)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="roles">Roles</label>
                    <select id="roles" className="form-control" value={roles} onChange={(e) => handleInputChange(e)}>
                        <option value="">Select a role</option>
                        <option value="professor">Professor</option>
                        <option value="student">Student</option>
                    </select>
                </div>
                <div className="text-center">
                    <button type="submit" className="mt-3 mb-3 btn btn-secondary">Register</button>
                </div>
            </form>
        </div>

    )
}

export default RegistrationForm