import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/Navbar/NavBar';
import HomePage from '../HomePage/HomePage';
import CreateVenuePage from '../CreateVenuePage/CreateVenuePage';
import EditVenuePage from '../EditVenuePage/EditVenuePage';
import IndexPage from '../IndexPage/IndexPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  };

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  };

  render() {
    return (
      <div>
        <header className='header'>Venues</header>
        <Switch>
        <Route exact path='/venue' render={props => (
          <div>
            <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout} 
            />
              <CreateVenuePage
                  {...props}
                  user={this.state.user}
                  handleLogOut={this.handleLogOut}
              />
          </div>
              ) 
          }/>
        <Route exact path='/homePage' render={props => (
          <div>
            <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout} 
            />
              <HomePage
                  {...props}
                  user={this.state.user}
                  handleLogOut={this.handleLogOut}
              />
          </div>
              ) 
          }/>
        <Route exact path='/editPage/:id' render={props => (
          <div>
            <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout} 
            />
              <EditVenuePage
                  {...props}
                  user={this.state.user}
                  handleLogOut={this.handleLogOut}
              />
          </div>
              ) 
          }/>
        <Route exact path='/IndexPage' render={props => (
          <div>
            <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout} 
            />
              <IndexPage
                  {...props}
                  user={this.state.user}
                  handleLogOut={this.handleLogOut}
              />
          </div>
              ) 
          }/>


          <Route exact path='/' render={() =>
            <NavBar 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
              :
              <Redirect to='/login' />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
