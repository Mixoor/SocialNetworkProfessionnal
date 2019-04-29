import React, { Component } from 'react'
import Sidemenu from './Sidemenu/Sidemenu'
import {Route,Switch,withRouter } from 'react-router-dom'
import Overview from './Page/Overview'
import Message from './Page/Message'
import Profile from './Page/Profile'
import Project from './Page/Project/Project'
import Projects from './Page/Project/Projects'
import AddProject from './Page/Project/AddProject';


class Dashboard extends Component{


    

    render(){
    
               
        
        return (
            <div className="main main-container">
            <Sidemenu/>
            <div className="sub-main-container ">
            
               <Switch>
                    <Route exact path="/dashboard/" render={(props) =>{return <Overview {...props}  />}}/>
                    <Route exact path="/dashboard/message/" render={(props)=><Message {...props} />}/>
                    <Route exact path="/dashboard/profile/me" render={(props)=><h3>mee</h3>}/>
                    <Route exact path="/dashboard/profile/:id" render={(props)=><Profile {...props} />}/>
                    <Route exact path="/dashboard/project/add" render={(props)=><AddProject {...props}/>}/>
                    <Route exact  path="/dashboard/project/:id" render={(props)=><Project {...props} />}/>
                    <Route exact  path="/dashboard/projects/" render={(props)=><Projects {...props} /> }/>
                </Switch>
                
            </div>


            </div>
        );
    }



}

export default withRouter(Dashboard);