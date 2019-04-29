import  React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        console.log("message: ","compnent did mount called ")    }

    render() {
        return (
            <h3>Message</h3>
        );
    }
}


export default Message;
