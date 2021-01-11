import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegisterForm from '../RegisterForm/RegisterForm';


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class RegisterLanding extends Component {
  state = {
    heading: 'Register Landing ',
  };

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>

            <RegisterForm />


      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterLanding);
