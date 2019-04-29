import React from 'react'
import '../SignupLoader/SignupLoader.css'
import {Link} from 'react-router-dom'

const SignupLoader=(props)=>{
    return (
        <div className="signup-loader">
        <h3>{props.message}</h3>
        <Link to='/signin' className='link button' >Go to Sign in</Link>
        </div>
    );
}

export default SignupLoader;