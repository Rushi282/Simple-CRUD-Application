import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import '../CSS/UpdateCss.css'

function Update() {

    const [id, setid] = useState('');
    const [userName, setuserName] = useState('');
    const [age, setage] = useState('');
    const [salary, setsalary] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setid(localStorage.getItem('id'));
        setuserName(localStorage.getItem('userName'));
        setage(localStorage.getItem('age'));
        setsalary(localStorage.getItem('salary'));
    }, [])

    const handleUpdate = (e) => {
        axios.put(`http://localhost:7090/user/update/${id}`,{
            userName : userName,
            age : age,
            salary : salary
        })
        .then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error.data);
        })
        alert('Updated Successfully!!!');
        navigate('/');
    }

    return (
        <>
            <div className="row mt-3">
                <div className="col-md-6 upForm">
                    <div className="bg-primary p-4 text-center">
                        <h1>Update User</h1>
                    </div>
                    <form className='mt-3' onSubmit={handleUpdate}>
                        <div className="form-group">
                            <label>UserName:</label>
                            <input type="email" name="userName" className='form-control' 
                            value={userName}  onChange={(e) => {
                                setuserName(e.target.value);
                            }} />
                        </div>
                        <div className="form-group">
                            <label>Age:</label>
                            <input type="number" name="age" className='form-control' 
                            value={age}  onChange={(e) => {
                                setage(e.target.value);
                            }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Salary:</label>
                            <input type="number" name="salary" className='form-control' 
                            value={salary}  onChange={(e) => {
                                setsalary(e.target.value);
                            }}
                            />
                        </div>
                        <br />
                        <div className="d-grid">
                            <input type="submit" value="Update" className='btn btn-primary' />
                        </div>
                        <div className="mt-3">
                            <Link to='/'>
                                <button className='btn btn-success'>Go to Home</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update