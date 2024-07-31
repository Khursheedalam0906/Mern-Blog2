import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const register = { name, email, password }

    const Register = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/register`, register)
            if (response.data.success) {
                alert(response.data.message)
            }
        } catch (error) {
            alert(error.response.data.error)
        }
    }

    return (
        <div style={{height:"100vh"}}>
            <div className='container shadow my-5'>
                <h1 className='text-center pt-3'>Sign up</h1>
                <div className='col-md-12 d-flex items-center justify-content-center mt-3'>
                    <div className='flex-column'>
                        <div className='mb-3'>
                            <label className='mb-1 form-label'>Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Enter Your Name' />
                        </div>
                        <div className='mb-3'>
                            <label className='mb-1 form-label'>Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder="Enter Email" />
                        </div>
                        <div className='mb-3'>
                            <label className='mb-1 form-label'>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='Enter Password' />
                        </div>
                        <button className='btn btn-primary mb-4' onClick={() => Register()}>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register