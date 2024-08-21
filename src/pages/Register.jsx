import React ,{useState, useContext } from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

import UserContext from '../context/UserContext'

const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [mail, setMail] = useState("")

    const {setdata} = useContext(UserContext)
    // sending this to usercontext using useContext hook for all these , where in that js file  a context is being created and that file is imported in userContextProvide.jsx and seyting up the value 
    const handleSubmit =(e)=> {
      e.preventDefault()
      setdata({username , mail})        // sending username and password 

    } 

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    value={username}
                                    onChange={ (e)=>setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                    value={mail}
                                    onChange={ (e)=>setMail(e.target.value)}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={handleSubmit}>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register