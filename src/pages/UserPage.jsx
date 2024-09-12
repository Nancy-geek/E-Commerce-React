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
        <div className='d-flex '>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/038/820/964/small_2x/man-doing-greet-pose-and-say-hello-free-vector.jpg" alt="" />
        <div>
       <div className='fixed  fs-1 text fw-bold my-auto text-center '>welcome {user.username} </div>          
       <div className='fixed   text fw-bold  my-auto text-center'>Mail id: {user.mail} </div>  
       </div>        
       {/* // extracting username form user  */}
       </div>
       </>
       )
}

export default UserPage