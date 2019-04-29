import React from 'react'
import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router-dom'


const Sidemenu=({match})=>{
    return (
        <div className="side-bar">
        <ul>
            <li><NavLink exact to="/dashboard/" activeClassName="active" ><i className="fa fa-receipt"></i>Overview </NavLink></li>

            <li><NavLink exact to="/dashboard/projects/" activeClassName="active" ><i className="fa fa-briefcase"></i> My job Feed </NavLink></li>

            <li><NavLink exact to="/dashboard/search" activeClassName="active"><i className=" fa fa-search"></i> Discover More<span className="side-notif">20</span> </NavLink></li>

            <li><NavLink exact to={`${match.url}/profile/me`} activeClassName="active"><i className="fa fa-user-circle"></i> Profile</NavLink></li>

            <li><NavLink exact to={`${match.url}/message/`} activeClassName="active"><i className="fa fa-envelope"></i>Message</NavLink></li>

            <li><NavLink exact to={`${match.url}/favoris/`} activeClassName="active"><i className="fa fa-heart"></i> Job Favoris</NavLink></li>

        </ul>
        <div className="div-footer">
            <span className="copy-right">© 2018 5ademni, LLC </span>

        </div>
    </div>

    );
}

export default withRouter(Sidemenu);