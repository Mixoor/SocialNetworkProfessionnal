import React from 'react'
import Popup from '../../../hoc/Popup/Popup'

const Menu=(props)=>{
    return (
        <span className="dropdown">
        <i className="fal fa-ellipsis-h drop-icon" ></i>
        {props.show===true &&  
            <ul className="drop-menu shadow">
                {props.children}
            </ul>
        }
          
        </span>
    );
}

export default Popup(Menu);