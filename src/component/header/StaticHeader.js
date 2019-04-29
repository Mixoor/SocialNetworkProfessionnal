import  React,{Component} from 'react';
import {NavLink,Link} from 'react-router-dom';


class StaticHeader extends Component{
    constructor(){
        super();
       this.state={
           open: false
        };
    }

    openHandler(){
       this.setState({open:!this.state.open});

    }
    render(){
        let classes =['navbar'];

        if(this.state.open)
        classes.push("open");

        let bar = !this.state.open ?  "fal fa-bars":"fal fa-times";
         

       
    return(
        <div className="header" onBlur={()=>{this.openHandler()}}>
        <span className="logo">
            <Link to="/">5ademni</Link>
        </span>
        <i className={bar+" small-only"} onClick={()=>{this.openHandler() }}></i>

        <ul className={ classes.join(" ")} >
               <li> <NavLink className="link"  activeClassName="active" to="/" exact>Home</NavLink></li>
               <li> <a  className="link"  href="/#d">How it work</a></li>
               <li> <a  className="link"   href="/#inf">About Us</a></li>
               <li> <a  className="link"  href="/#contact">Contact Us</a></li>  
               <li> <NavLink  className="link" activeClassName="active" to="/signin">Sign in</NavLink></li>
               <li> <NavLink  className="link button" activeClassName="active" to="/signup">Sign up</NavLink></li>           
    </ul>

    </div> 

    );
    }
};

export default StaticHeader;