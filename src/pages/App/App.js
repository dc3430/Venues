import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Venues under construction!</h1>
          <p>This is the start of your last project</p>
        </header>
      </div>
    );
  }
}

export default App;
