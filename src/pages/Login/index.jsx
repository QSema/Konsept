import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Login/style.scss'

const Login = () => {

    const [loginUser, setLoginUser] = useState({
        email: "",
        password: "",
    })

    const admin = {
        email: 'admin1@gmail.com',
        password: '1admin',
        name: 'KonseptA',
    }
    const handleChange = (e) => {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
    }

    const History = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const userFromLocal = JSON.parse(localStorage.getItem('user'))
        console.log(userFromLocal);
        if (loginUser.email == userFromLocal?.email && loginUser.password == userFromLocal?.password) {
            localStorage.setItem('newUser', JSON.stringify(userFromLocal))
            History("/")
            // window.location.reload()
        }
        else if (loginUser.email == admin.email && loginUser.password == admin.password) {
            localStorage.setItem('admin', JSON.stringify(admin))
            History("/admin")
            // window.location.reload()
        }
        else {
            alert('Melumatlarda yanlisliq var')
        }
    }
    return (
        <>
            <section className="log-s">
                <h1>LogIn</h1>
            </section>
            <section className='login-s' style={{ alignItems: 'center', display: 'flex' }}>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="hd">
                            <h2>LOGIN</h2>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address *</label>
                            <input
                                type="email"
                                className="form-control"
                                name='email'
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password *</label>
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" >Log In</button><br />

                        <NavLink to='/register'>Don't have an account?</NavLink>
                    </form>

                </div>
            </section>
        </>
    )
}

export default Login