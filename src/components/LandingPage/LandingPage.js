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


class LandingPage extends Component {


  onLogin = (event) => {
    this.props.history.push('/login');
  };

  onRegister = (event) => {
    this.props.history.push('/registration');
  }

  render() {
    return (
      <div className="center">
        <h1 className ="app-name">The Dream App</h1>
          <hr></hr>
              <h4 className="app-subheading">
              </h4>
            <br></br>
                    <p className="center landing-text-justified">
                        Every writer who has been diagnosed with writer's block, knows how distressing it can be.
                        It strikes aggressively, often, and sometimes never truly leaves. The Dream App allows a solution 
                        to this.
                    <br></br>
                    <br></br>
                         Dreams, in true form, are our mind's interpretations of things we have may  
                        encountered well and up front in our wake state, or things we merely brushed while en route 
                        somewhere. 
                    <br></br>
                    <br></br>          
                        The Dream App concept is simple but effective, "The creativity has already been done." All that's 
                        left to do is exract the details of one's minds onto paper, and perhaps several years of editing.
                    <br></br>
                    <br></br>
                    </p>
              <Button variant="contained" onClick={this.onLogin}>
                  Log In
              </Button>
              <span className="space-between-buttons"></span>
              <Button variant="contained" onClick={this.onRegister}>
                  Register
              </Button>
              <br></br>

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
