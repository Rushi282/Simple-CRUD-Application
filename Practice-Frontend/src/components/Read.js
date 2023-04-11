import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/ReadCss.css'

function Read() {

    const [apiData, setapiData] = useState([]);

    function getData(){
        axios.get('http://localhost:7090/user')
        .then((response) => {
            console.log(response.data);
            setapiData(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    function handleDelete(id){
        axios.delete(`http://localhost:7090/user/${id}`)
        .then((response) => {
            alert(response.data.message);
            console.log(response);
            getData();
        }).catch((error) => {
            console.log(error);
        })
    }

    function setDataToStorage(id, userName, age, salary){
        localStorage.setItem('id', id);
        localStorage.setItem('userName', userName);
        localStorage.setItem('age', age);
        localStorage.setItem('salary', salary);
    }

    useEffect(() => {
        getData();
    }, [])
    

  return (
    <div className="row">
        <div className="col-md-12">
            <Link to='/create'>
                <div className='mb-3 mt-5'>
                    <button className='btn btn-primary'>Register User</button>
                </div>
            </Link>
            <table className='table table-bordered table-striped table-hover myTable'>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData.map((item) => {
                            return(
                                <>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.salary}</td>
                                        <td>
                                            <Link to='/update'>
                                                <button className='btn btn-success' onClick={() => {
                                                    setDataToStorage(item.id, item.userName, item.age, item.salary);
                                                }}>Edit</button>
                                            </Link>
                                        </td>
                                        <td><button className='btn btn-danger' onClick={() => {
                                           if(window.confirm('Are you sure to delete? ')){
                                                handleDelete(item.id);
                                           }
                                        }}>Delete</button></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Read