import React from 'react'
import {Link} from 'react-router-dom'

const NotificationItem=(props)=>{
    return(
        <div className="drop-item">
            <Link to="#">
                <div>
                    <img src="/Assets/photo.png" alt="" />
                        <p>
                            <Link to="#"> Chady Mbarki </Link>has commented to your posts <span>This
                                                        the
                                                        <Link to="#">post title</Link></span>.
                        </p>
                           <span class="date">4 min</span>
                </div>
                                        </Link>
                                    </div>
    );
}

export default  NotificationItem;