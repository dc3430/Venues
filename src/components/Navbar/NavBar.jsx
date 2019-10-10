import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import HomePage from '../../pages/HomePage/HomePage';
import CreateVenuePage from '../../pages/CreateVenuePage/CreateVenuePage'

const NavBar = (props) => {
  let nav = props.user ?
    <div>

      <Link to='/homePage'>Home</Link>
      &nbsp;&nbsp;
      <Link to='/venue'>Create Venue</Link>
      &nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
      &nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;