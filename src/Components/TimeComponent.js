import React, { Component } from 'react'


export default class TimeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interval: 0,
            time: new Date().toLocaleTimeString(),
            timezone:'',
            localTime: ''
        };
    }


    componentDidMount() {
this.interval = setInterval(()=> this.setState({
    time: new Date().toLocaleTimeString()
}), 1000);
this.setState({
    timezone: new Date().getTimezoneOffset()
});

this.setState({
  
});
    }

    componentWillUnmount(){
        clearInterval()
    }
    render() {
        const moment = require('moment-timezone');
        return (
            <span className="time">
{this.state.time}
<p>Offset from utc is now {this.state.timezone} minutes </p> 
        <p>{this.state.localTime}</p>
            </span>
        )
    }
}

