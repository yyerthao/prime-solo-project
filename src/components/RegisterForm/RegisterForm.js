import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../RegisterForm/RegisterForm.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const styles = theme => ({
  button: {
    margin: theme.spacing(),
  },
});



class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };



  render() {
    return (
      <div>
        <h1 className="app-name">The Dream App</h1>
          <div className="nav-link-about nav-link-hover">
            <Link to="/home">
              Home
            </Link>
            <span className="space-between-buttons"></span>
            <Link to="/about">
              About
            </Link>
          </div>
          <hr></hr>
        <h2 className="center-text">Create a username and password </h2>
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
        <div>
          <Button variant="contained" className="btn" type="submit" name="submit" value="Register">Register</Button>
        </div>
      </form>
      </div>

    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(RegisterForm));
