// Code DigitalClicker Component Here

import React, { Component } from 'react'

class DigitalClicker extends Component {

    constructor() {
        super()

        this.state ={
            timesClicked: 0
        }
    }


    timesClickedEvent = (e) => {
        console.log(e)
        console.log(this.state)

        this.setState({timesClicked: this.state.timesClicked + 1})
    }

    render() {
        return <button onClick={this.timesClickedEvent}>{this.state.timesClicked}</button>
    }

}

export default DigitalClicker