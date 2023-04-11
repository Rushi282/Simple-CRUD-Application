import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../CSS/CreateCss.css'

function Create() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [salary, setSalary] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(e);
        axios.post("http://localhost:7090/user",{
            firstName : firstName,
            lastName : lastName,
            userName : userName,
            age : age,
            salary : salary
        }).then((response) => {
            console.log(response);
            
        }).catch((error) => {
            console.log(error);
        })
        alert("successfully submited!!");
        navigate('/');
    }

  return (
    <>
        <div className="row mt-3">
            <div className="col-md-6 myForm">
                <div className="bg-primary p-4 text-center">
                    <h1>User Registration</h1>
                </div>
                <form onSubmit={handleSubmit} className='mt-3'>
                    <div className="form-group">
                        <label>FirstName:</label>
                        <input type="text" name="firstName" className='form-control' onChange={(e) => {
                            setFirstName(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label>LastName:</label>
                        <input type="text" name="lastName" className='form-control' onChange={(e) => {
                            setLastName(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label>UserName:</label>
                        <input type="email" name="userName" className='form-control' onChange={(e) => {
                            setUserName(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input type="number" name="age" className='form-control' onChange={(e) => {
                            setAge(e.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label>Salary:</label>
                        <input type="number" name="salary" className='form-control'onChange={(e) => {
                            setSalary(e.target.value);
                        }} />
                    </div>
                    <br />
                    <div className="d-grid">
                        <input type="submit" value="Submit" className='btn btn-primary' />
                    </div>
                    <div className="mt-3">
                        <Link to='/'>
                            <button className='btn btn-success'>Go to Home</button>
                        </Link>
                    </div>
                </form>
                {firstName}
                <br />
                {lastName}
                <br />
                {userName}
                <br />
                {age}
                <br />
                {salary}
            </div>
        </div>
    </>
  )
}

export default Create