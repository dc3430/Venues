import React, { Component } from 'react';
import './HomePage.css'

class HomePage extends Component {

    render() {
        return (
            <div className='HomePage'>
                <img src="https://i.imgur.com/HBd1zDI.jpg"></img>
                <h1 className='Home-Message'>Welcome to Venues</h1>
                <h1 className='Home-Message'>An App to help you track wedding Venues for your special Day!</h1>
            </div>
        )
    }
}

export default HomePage;