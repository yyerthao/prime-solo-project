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
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          {/* There used to be text inside here, all the text in here were originally 
          on the left side of the DOM ... reediting to utilize my links onto DOM */}
          {/* <div className="grid-col grid-col_8"> */}
          {/* </div> */}
          <div className="grid-col grid-col_4">
            {/* <RegisterForm /> */}

            <center>
              <h4>Existing User?</h4>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
              <h4>New User?</h4>
              <button className="btn btn_sizeSm" onClick={this.onRegister}>
                Register
              </button>
            </center>


          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
