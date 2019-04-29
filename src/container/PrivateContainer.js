import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'
import DynamicHeader from '../component/header/DynamicHeader'
import Loader from '../component/UI/Loader/Loader'
import {getMe} from '../actions/meAction'
import Dashboard from '../component/Dashboard/Dashboard'
import Community from '../component/Community/Community'
import Explore from '../component/Explore/Explore'
import Aux from '../hoc/Aux';
import ErrorComponent from '../component/ErrorComponent/ErrorComponent'
class PrivateContainer extends Component{



    constructor(props){
        super(props);
        this.props.getMe();
    }

    render(){

        const links=  
            (
            <Aux> 
                <DynamicHeader />
                <Switch>
                    <Route  path="/dashboard" component={Dashboard}/>
                    <Route  path="/explore/" component={Explore}/>
                    <Route  path="/community/" component={Community}/>
                    <Redirect  exact from="/signin" to="/"/>
                    <Redirect exact from="/" to="/dashboard"/>
                    <Route render={()=>{
                        return (
                            <ErrorComponent>
                            <h1 className="page-404">404</h1>
                            <h3>OOP! THIS PAGE CAN NOT BE FOUND</h3>
                            <p>You may have mis-typed the URL. Or the page has been removed, had its name changed, or is temporarily unavailable. Actually, there is nothing to see here....</p>
                            <button className="button primary large" onClick={()=>{
                              this.props.history.push('/');
                            }
                              }>Go To Home</button>
                          </ErrorComponent>
                        );
                        }}/>
                </Switch> 
            </Aux>
        ) ;

        let loader=<Loader className="center"/>;
        if(!this.props.me.loading && this.props.me.id)
        loader=links;    
        return(
       <div className="container">
                   
                {loader}

        </div>
           
           );
    }


}


const mapStateToProps=(state)=>{
        return {
           me :state.me
        }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getMe:()=>dispatch(getMe())
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PrivateContainer));