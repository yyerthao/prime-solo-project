// HOME VIEW 
// first page user sees when logged into the application

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../UserPage/UserPage.css';
// importing HashRouter,Router,Route, Link to utilize this.props.history.push
import {HashRouter as Router, Route, Link} from 'react-router-dom';
// importing component AddDream from file
import AddDream from "../AddDream/AddDream";
import Nav from '../Nav/Nav';





class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM



addDream = () => {
  console.log('Add dream button clicked');

}

viewDreams = () => {
  console.log('View dreams button clicked');

}



  render() {
    return (
      <div>
        <Nav/>
        <h2 className="center-text" id="welcome">Welcome, {this.props.store.user.username}! Your ID is {this.props.store.user.id}</h2>
      {
        /*  ------------------------- TO DO -------------------------
        - [] LINK to add dream -> brings users to add dream view
        - [] LINK to view dreams -> brings uers to view dreams view
        - [] Welcome message
        - [] STRETCH: time lapse video 
        - [] STRETCH: add a random quotes generator inside of here
      */}
        <div className="container center-text">
        <Router>
          <Link to="/addDream" replace>
            <span className="add-dream-btn" onClick={this.button}>Add Dream</span>
          </Link>
          <Link to="/viewDreams">
            <span className="view-dream-btn" onClick={this.button}>View Dreams</span>
          </Link>

          <Route exact path="/addDream" component={AddDream}></Route>
          {/* <Route exact path="/viewDreams" component={ViewDreams}></Route> */}


        </Router>

          {/* <LogOutButton className="log-in center"/> */}
        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
