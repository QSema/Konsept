import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';
import '../register/style.scss'

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const location = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        location('/login');
        localStorage.setItem("user", JSON.stringify(user));
    }



    return (
        <>
            <section className="reg-s">
                <h1>Register</h1>
            </section>
            <section className='register-s' style={{ alignItems: 'center', display: 'flex' }}>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="hd">
                            <h2>REGISTER</h2>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input
                                type='text'
                                className="form-control"
                                name='name'
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                name='email'
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>

                </div>
            </section>

        </>
    )
}

export default Register