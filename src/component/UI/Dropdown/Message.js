import React,{Component} from 'react'

class Message extends Component{
  
    state={
        show:false
    };

    onBlur=()=>{
        this.setState({show: false});
    }
    onToggleHandler=()=>{
        this.setState({show: !this.state.show})
    }
    render(){
        return (
            <div className="dropdown"  onBlur={this.onBlur} tabIndex='0'   >
            <i className="icon fal fa-envelope"   onClick={this.onToggleHandler}></i>
            {this.state.show ?     <div className="dropdown-body message" >
                <div className="triangle mg"></div>

                <h4 className="drop-header">Message <i className="fal fa-cog"></i> </h4>


                <div className="drop-list">
                

                </div>

                <span className="last"><span > See more</span></span>
                </div> : null }
        
            </div>
        );
    }




} 

export default (Message);