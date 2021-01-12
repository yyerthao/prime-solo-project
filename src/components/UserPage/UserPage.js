// HOME VIEW 
// first page user sees when logged into the application

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../UserPage/UserPage.css';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM



addDream = () => {
  console.log('Add dream button clicked');
  this.props.history.push('/addDream')
  
}

viewDreams = () => {
  console.log('View dreams button clicked');
  
}




  render() {
    return (
      <div>
        <h1 className="center-text" id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p className="center-text"> Your ID is: {this.props.store.user.id}</p>

      {
        /*  ------------------------- TO DO -------------------------
        - [] LINK to add dream -> brings users to add dream view
        - [] LINK to view dreams -> brings uers to view dreams view
        - [] Welcome message
        - [] STRETCH: time lapse video 
        - [] STRETCH: add a random quotes generator inside of here
      */}

      <button className="center-button add-dream-btn" onClick={this.addDream}>Add Dream</button>
      <button className="center-button" onClick={this.viewDreams}>View Dreams</button>


        <LogOutButton className="log-in center" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
