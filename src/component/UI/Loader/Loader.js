import React from 'react'
import '../Loader/Loader.css'



 const Loader =(props)=>{
        return (
            <div {...props}>
                <div className="load-5">
                     <div className="ring-2">
                    <div className="ball-holder">
                        <div className="ball"></div>
                    </div>
                </div>
            </div>
        </div>

        );
}

export default Loader;