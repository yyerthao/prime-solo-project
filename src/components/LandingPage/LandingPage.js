// this is the view users will face upon loading application 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS

class LandingPage extends Component {
  state = {
    heading: '',
    // heading: 'Class Component',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  onRegister = (event) => {
    this.props.history.push('/registration');
  }

  render() {
    return (
      <div className="center">
        <h1 className ="app-name"> The Dream App </h1>
        <div>
          {/* There used to be text inside here, all the text in here were originally 
          on the left side of the DOM ... reediting to utilize my links onto DOM */}

          <div className="container-in-line">
            <h4>Existing User?</h4><button onClick={this.onLogin}>Log In</button><h4>New User?</h4><button onClick={this.onRegister}>Register</button>

{/* ---------------------------------------------------------------------------------- */}
          {/* <div className="grid-col grid-col_8"> */}
          {/* </div> */}
          {/* <div className="grid-col grid-col_6"> */}
            {/* <RegisterForm /> */}

            {/* <center className="center">
              <h4>Existing User?</h4>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
              <h4>New User?</h4>
              <button className="btn btn_sizeSm" onClick={this.onRegister}>
                Register
              </button>
            </center> */}
{/* ---------------------------------------------------------------------------------- */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
