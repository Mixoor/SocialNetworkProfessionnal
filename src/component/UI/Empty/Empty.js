import React from 'react'


const Empty =(props)=>{

    return (
        <div className="empty">
            <img src={process.env.PUBLIC_URL + '/Assets/empty.svg'}  alt="empty"/>
           <h4>No Result</h4>
           {props.children}
        </div>
    );
}

export default Empty;