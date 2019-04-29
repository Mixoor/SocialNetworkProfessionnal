import React, { Component } from 'react';
import PublicContainer from './container/PublicContainer';
import PrivateContainer from './container/PrivateContainer';
import {Route} from 'react-router-dom';
import {connect } from 'react-redux';
import * as actions from './actions/appAction';
import {authCheck,logout} from './actions/authAction';
import {withRouter} from 'react-router-dom';
import Loader from './component/UI/Loader/Loader';
import ErrorComponent from './component/ErrorComponent/ErrorComponent'

class App extends Component {


  componentDidMount(){

    this.props.onStart();
    this.props.onAuthCheck();
  }

  render() {
      let stuff= <Route path='/' component={PublicContainer}/> ;

      if(this.props.isAuthenticated)
        stuff =<Route path='/' component={PrivateContainer}/>;

      if(this.props.loading)
        stuff=<Loader className="center"/>;

      if(this.props.error)
        stuff=<ErrorComponent>
          <h3>Try to login</h3>
          <p>You may have mis-typed the URL. Or the page has been removed, had its name changed, or is temporarily unavailable. Actually, there is nothing to see here....</p>
          <button className="button primary large" onClick={()=>{
            this.props.onLogout();
            window.location.reload();
          }
            }>Go To Home</button>
        </ErrorComponent>
      if(!window.navigator.onLine)
      stuff=<div className="center no-connection">
            <img src={process.env.PUBLIC_URL+'/Assets/no.png'} alt=""/>
            <h4>No internet connection</h4>
            <button className="button danger" onClick={()=>{
            this.props.onLogout();
            window.location.reload();}
          }>Try Again</button>
          </div>
    return (
       <>
      {stuff}      
      </>
  );
  }
}

const mapDispathToprops=(dispatch)=>{
  return {
     onStart:()=>dispatch(actions.app()),
     onAuthCheck:()=>dispatch(authCheck()),
     onLogout:()=>dispatch(logout())
  };
};
const mapStateToProps=(state)=>{
  return {
    loading: state.auth.loading || state.app.loading,
    isAuthenticated: state.auth.token != null,
    error: state.me.error
  }
}


export default withRouter(connect(mapStateToProps,mapDispathToprops)(App)); 
