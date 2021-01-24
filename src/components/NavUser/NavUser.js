import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './NavUser.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const NavUser = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Main';
  }

  return (
    <div className="nav">
      {/* <Link to="/home">
        <h2 className="nav-title">The Dream App</h2>
      </Link> */}
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
          <span> ||</span>
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            {/* <Link className="nav-link" to="/addDream">
              || Add Dream ||
            </Link>
            <Link className="nav-link" to="/viewDreams">
              View Dreams
            </Link> */}
            <LogOutButton className="nav-link" /> 
          </>
        )}
        {/* Always show this link since the about page is not protected */}
            <Link className="nav-link" to="/about">
               About
            </Link>
      </div>
      <hr></hr>
      <hr></hr>
    </div>
  );
};

export default connect(mapStoreToProps)(NavUser);
