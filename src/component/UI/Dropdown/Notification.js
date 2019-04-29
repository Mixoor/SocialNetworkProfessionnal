import React,{Component} from 'react'

class Notification extends Component{
  
    state={
        show:false
    };

    onBlur=()=>{
        this.setState({show: false})
    }
    onToggleHandler=()=>{
        this.setState({show: !this.state.show})
    }

    render(){
  
        return (
            <li className="dropdown"   onBlur={this.onBlur} tabIndex="0">
            <i className="icon fal fa-bell"  onClick={this.onToggleHandler}></i>   
            {this.state.show === true ?   
                  <div className="dropdown-body">
                <div className="triangle"></div>

                <h4 className="drop-header">Notification <i className="fal fa-cog"></i> </h4>


                <div className="drop-list">
                

                </div>

                <span className="last"><span > See more</span></span>
                </div> : null }
                 
            </li>
        );
    }




} 

export default (Notification);