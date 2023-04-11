import React from 'react';
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Welcome to User Management System</h1>
            <hr />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">User Details</h5>
                                <p className="card-text">Get all User details, Please press 'Click' button for User details.</p>
                                <Link to='/read'>
                                    <button className='btn btn-primary'>Click</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Register User</h5>
                                <p className="card-text">Register new User, Please press 'Register' button to fill User details.</p>
                                <Link to='/create'>
                                    <button className='btn btn-primary'>Register</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-3">
                    <div className="card">
                            <img src="..." className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-xl-3">
                    <div className="card">
                            <img src="..." className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
