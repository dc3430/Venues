import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import HomePage from '../../pages/HomePage/HomePage';
import CreateVenuePage from '../../pages/CreateVenuePage/CreateVenuePage'

const NavBar = (props) => {
  let nav = props.user ?
    <div className="NavBar-A">
      <Link to='/IndexPage' className='NavBar-link'>Index</Link>
      &nbsp;&nbsp;
      <Link to='/HomePage' className='NavBar-link'>Home</Link>
      &nbsp;&nbsp;
      <Link to='/venue' className='NavBar-link'>Create Venue</Link>
      &nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
      &nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div className="NavBar-B">
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