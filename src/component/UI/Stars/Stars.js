import React from 'react'

const Stars=(props)=>{
    let stars =[];
    for(let i= 0 ;i<4;i++){
        if(i<props.stars)
        stars.push(<span key={i}><i className="fas fa-star"></i></span>);
        else
        stars.push(<span key={i}><i className="fal fa-star"></i></span>);
    }
    return(
        <div className="stars">
         {stars}

        </div>
    );
}

export default Stars;