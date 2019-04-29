import React from 'react';


class CircleChart extends React.Component{

    componentDidMount(){
        let {width,height,value,per ,rad}= this.props;
        let canvas =this.refs.canvas;
        let context= canvas.getContext("2d");
        console.log(this.props);
        // First arc 
        context.beginPath();
        context.arc(width/2,height/2,rad-2,0,2*Math.PI);
        context.strokeStyle='#ECECEC';
        context.lineWidth="2";
        context.stroke();
        
        context.beginPath();
        context.arc(width/2,height/2,rad-2  ,1.5*Math.PI,value);
        context.strokeStyle='#4dabea';
        context.lineWidth="2";
        context.stroke();
      


        context.font='14px Roboto';
        context.fillText(""+per+"%",width/2,height/2);

        

    }

    render(){
        return(
            <canvas ref="canvas" width={this.props.width} height={this.props.height} />


        );
    }
}


export default CircleChart;