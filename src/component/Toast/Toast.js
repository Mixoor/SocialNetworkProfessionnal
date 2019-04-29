import React from 'react';
import '../Toast/Toast.css';

 const Toast=(props)=>{


        return (
         <div className="toast" onBlur={setTimeout(props.onHide,1200)} onClick={setTimeout(props.onHide,1200)}>
        <p>{props.message}</p>
        </div>
           
        );
    
}

export default Toast;