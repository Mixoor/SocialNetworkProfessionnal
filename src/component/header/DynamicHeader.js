import React, { Component } from 'react'
import {connect} from 'react-redux'
import Aux from '../../hoc/Aux'
import {Link,NavLink} from 'react-router-dom'
import Notification from '../UI/Dropdown/Notification'
import Message from '../UI/Dropdown/Message'
import {withRouter} from 'react-router-dom'
import { url } from '../../util/Utility';

class DynamicHeader extends Component{

    constructor(props){
        super(props);
        this.redirectJob=this.redirectJob.bind(this);
    }

    redirectJob(){
        this.props.history.push("/dashboard/job/add");
    }

    render(){
        const {project,unfinishedProject,earning} = this.props.me
        let cssClass= this.props.me.role.toLowerCase();  
        return(
            <Aux>
                 
                   <div className="header ">
            <span className="logo">
                <Link to="/"><span className={cssClass}>5</span>ademni</Link>
            </span>
            <ul className="navbar-last">
                <li className="search-nav"><i className="search-icon fal fa-search"></i><input type="text" placeholder="Search for everthing you need..." /></li>
                <li className="sub-navbar">
                    <ul>
                        {this.props.me.role.toLowerCase() ==="client" &&
                        <li>
                            <button className="button primary" onClick={this.redirectJob}>Post Job</button>
                        </li>
                        }
                                <Notification/>
                        <li>
                            <Message/>
                        </li>

                        <li className="profile">
                            <img src={url+"/picture/"+this.props.me.picture} alt={this.props.me.name}/>
                        </li>

                    </ul>
                </li>

            </ul>
            <i className="fal fa-bars  small-only"></i>


        </div>

        <div className="header">
            <div className="navbar-one">
                <ul className="nav-tab">
                    <li><NavLink  activeClassName={cssClass} to="/dashboard/" ><i className="fal fa-home"></i>Dashboard</NavLink></li>
                    <li><NavLink  activeClassName={cssClass}  to="/community/"><i className="fal fa-tree"></i>Community</NavLink></li>
                    <li><NavLink  activeClassName={cssClass}  to="/explore/"><i className="fal fa-bullseye"></i>Explore</NavLink></li>
                </ul>
            </div>
            <div className="navbar-two">
                <ul className="budget-information">
              
                    <li>
                        Unfinished Project: <span className={"ptitle "+cssClass}>{unfinishedProject} project</span>
                    </li>
                    <li>
                        Finished Project: <span className={"ptitle "+cssClass}>{project} project</span>
                    </li>
                    <li>
                        Earning: <span className={"ptitle "+cssClass}>{earning} project</span>
                    </li>
                </ul>
            </div>



        </div>
            </Aux>
            );
          

    }


}

const mapStateToProps=(state)=>{
        return {
            me:state.me
        }
}

export default withRouter(connect(mapStateToProps)(DynamicHeader));