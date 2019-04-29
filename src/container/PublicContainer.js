import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Signin from '../component/public/Signin/Signin'
import IndexPage from '../component/public/IndexPage'
import  StaticHeader from '../component/header/StaticHeader'
import SignupChoice from '../component/public/Signup/SignupChoice'
import Signup from '../component/public/Signup/step/Signup'
import * as data from '../util/SignupData'

class PublicContainer extends Component{

 

    render(){
            const links=  
            ( <Switch>
            <Route exact path="/" component={IndexPage}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/signup" component={SignupChoice}/>
            <Route exact path="/signup/freelancer" component={()=><Signup form={data.freelancerSignup} step={data.stepsForFreelancer} type={0}/>}/>
            <Route exact path="/signup/client" component={()=><Signup form={data.clientSignup} step={data.stepsForClient} type={1}/>}/>

            <Route render={()=>{return <h3>404 Page</h3>}}/>
            </Switch> ) ;

        return (
            
            <div className="container">
            
            <StaticHeader/>

            {links}
               
            </div>
        );


    }
}


  

  
export default PublicContainer;
