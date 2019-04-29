import React  from 'react'


export default function (Component) {
    return class Popup extends React.Component{
        constructor(props){
            super(props);
            this.state={
                show:false
            };
        }


        onToggleHandler=(e)=>{
            this.setState({
                show : !this.state.show
            });
        }


        onBlur=(e)=>{
            this.setState({
                show : false
            });
        }


        render(){
            return(
                <div className="popup" tabIndex="0" onBlur={(e)=>this.onToggleHandler(e)} onClick={this.onToggleHandler}>
                <span>
                <Component show={this.state.show}>
                    {this.props.children}
                </Component>
                </span>
                </div>  
            );
        }

    }
}