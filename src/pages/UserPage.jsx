import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import { Navbar } from "../components";
import { Link } from 'react-router-dom';

function UserPage() {

    const {user} = useContext(UserContext)           // username and password are in user passed 
    console.log(user.username);
    console.log(user);
   
    // optional chaining
       if(!user) return(
        <>
        <div className='fixed  fs-1 text fw-bold my-auto text-center   '>please login</div>
        <div className="my-3 text-center">
            <p>New Here? <Link to="/register" className="text-decoration-underline text-info ">Register</Link> </p>
        </div>
        <div className="my-3 text-center">
            <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
        </div>
        </>
       ) 
       
       else return (
        <>
        <Navbar/>
       <div>welcome {user.username} </div>          
       <div>welcome {user.mail} </div>          
       {/* // extracting username form user  */}
       </>
       )
}

export default UserPage