import React from 'react'
import {withRouter} from 'react-router-dom'

const SignupChoice =(props)=> {
  
        return (
            <div className="main">
            <div className=" row page">
                <div className=" column-3-7 ">
                    <div className="borderin">
                        <div className="header-title">
                            <h3> Choose account type </h3>

                        </div>
                            <div className="centered">

                            <button className="button large primary round-btn" onClick={()=>{setTimeout(()=>props.history.push("/signup/freelancer"),800)}}>Freelancer</button>
                            <span className="or-span">OR</span>
                            <button  className="button large danger round-btn " onClick={()=>{setTimeout(()=>props.history.push("/signup/client"),800)}} >Client</button>
                         
                              
                            </div>
                        </div>
                    </div>
            </div>

            </div>
        
           
      
        );
    
}


export default withRouter(SignupChoice);