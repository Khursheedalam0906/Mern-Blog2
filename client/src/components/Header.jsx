import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        alert("Logout Successfully")
        navigate("/login")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary position-sticky top-0 z-1">
                <div className="container-fluid">
                    <Link to="/">
                        <h1 className="navbar-brand text-light">Khursheed</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/">
                                <li className="nav-item">
                                    <h1 className="nav-link active text-light" aria-current="page">Home</h1>
                                </li>
                            </Link>
                            <Link to="/addblog">
                                <li className="nav-item">
                                    <h1 className="nav-link text-light">Add blog</h1>
                                </li>
                            </Link>
                            <Link to="/addcategory">
                                <li className="nav-item">
                                    <h1 className="nav-link text-light">add Category</h1>
                                </li>
                            </Link>
                        </ul>
                        {
                            token ?
                                <>
                                    <button className='btn btn-primary'>Welcome : {username}</button>
                                    <button className='btn btn-primary' onClick={() => handleLogout()}>Logout</button>
                                </>
                                :
                                <>
                                    <Link to="/login">
                                        <button type="button" className="btn text-light">Login</button>
                                    </Link>
                                    <Link to="/register">
                                        <button type="button" className="btn text-light">Register</button>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header