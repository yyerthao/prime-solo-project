
// first page user sees when logged into the application

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutBut/ton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../UserPage/UserPage.css';
// importing HashRouter,Router,Route, Link to utilize this.props.history.push
// import {HashRouter as Router, Route, Link} from 'react-router-dom';
// importing component AddDream from file
// import AddDream from "../AddDream/AddDream";
import '../UserPage/UserPage.css';
import '../ViewDreams/ViewDreams';

import Nav from '../Nav/Nav';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing(),

  },
});




class UserPage extends Component {


addDream = () => {
  console.log('Add dream button clicked');
  this.props.history.push('/addDream');

}

viewDreams = () => {
  console.log('View dreams button clicked');
  this.props.history.push('/viewDreams');
}



  render() {
    return (
      <div>
        <Nav/>
        <h2 className="center-text" id="welcome">Hello, {this.props.store.user.username}!</h2>
        <h4 className="justified-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias molestias totam ex 
            reprehenderit, officia cumque minus repellendus, temporibus ad fugiat incidunt, 
            consectetur assumenda beatae rerum dignissimos numquam autem aliquid amet. Lorem 
            ipsum dolor sit amet consectetur adipisicing elit.Alias molestias totam ex reprehenderit, 
            officia cumque minus repellendus, temporibus ad fugiat incidunt, consectetur assumenda 
            beatae rerum dignissimos numquam autem aliquid amet.
        </h4>

      {
        /*  ------------------------- TO DO -------------------------
        - [] LINK to add dream -> brings users to add dream view
        - [] LINK to view dreams -> brings uers to view dreams view
        - [] Welcome message
        - [] STRETCH: time lapse video 
        - [] STRETCH: add a random quotes generator inside of here
      */}


        <div className="container center-text">
            <Button className="add-dream-btn" onClick={this.addDream}>Add Dream</Button>
              <span className="space-between-buttons"></span>
            <Button className="view-dream-btn" onClick={this.viewDreams}>View Dreams</Button>

        </div>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withStyles(styles)(UserPage));
