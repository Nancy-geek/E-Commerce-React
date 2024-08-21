import React ,{useState, useContext }from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

import UserContext from '../context/UserContext'
// import UserContextProvider from './context/UserContextProvider'

const Login = () => {

  const [username, setUsername] = useState("")
    // const [password, setPassword] = useState("")
    const [mail, setMail] = useState("")

    const {setdata} = useContext(UserContext)
    // sending this to usercontext using useContext hook for all these , where in that js file  a context is being created and that file is imported in userContextProvide.jsx and seyting up the value 
    const handleSubmit =(e)=> {
      e.preventDefault()
      setdata({ mail}) ;       // sending username and password 
     
    } 
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={mail}
                   onChange={ (e)=>setMail(e.target.value)}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
              <Link to="/" className="text-decoration-underline text-info">
                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={handleSubmit}>
                  Login
                </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
     
    </>
  );
};

export default Login;
