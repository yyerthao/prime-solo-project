// this is the view users will face upon loading application 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './LandingPage.css';



const styles = theme => ({
  button: {
    margin: theme.spacing(),
  },
});

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
        <h1 className ="app-name">The Dream Catcher</h1>
          <hr></hr>
              <h4 className="app-subheading">
              </h4>
            <br></br>

              <Button variant="contained" onClick={this.onLogin}>
                  Log In
              </Button>
              <span className="space-between-buttons"></span>
              <Button variant="contained" onClick={this.onRegister}>
                  Register
              </Button>

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
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LandingPage));
