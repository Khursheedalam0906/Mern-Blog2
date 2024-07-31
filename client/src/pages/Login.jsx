import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const login = { email, password }

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, login)
            if (response.data.success) {
                alert(response.data.message)
                console.log(response.data)
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("username", response.data.username)
                navigate("/")
            }
        } catch (error) {
            alert(error.response.data.error)
        }
    }

    return (
        <div className='' style={{height:"100vh"}}>
            <div className='container shadow my-5'>
                <h1 className='text-center pt-3'>Login</h1>
                <div className='col-md-12 d-flex items-center justify-content-center mt-3'>
                    <div className='flex-column'>
                        <div className='mb-3'>
                            <label htmlFor='email' className='mb-1 form-label'>Email</label>
                            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder="Enter Email" />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password' className='mb-1  form-label'>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className='form-control' placeholder='Enter Password' />
                        </div>
                        <button className='btn btn-primary mb-4' onClick={() => handleLogin()}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login