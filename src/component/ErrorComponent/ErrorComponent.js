import React from 'react'
import '../ErrorComponent/ErrorComponent.css'

 const ErrorComponent=(props)=>{
        return (
            <div className="error-center" >
            <div class="error-c">
            {props.children}

            </div>
            </div>
        );
} 

export default ErrorComponent;