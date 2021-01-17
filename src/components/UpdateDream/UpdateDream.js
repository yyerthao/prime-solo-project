import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Nav from '../Nav/Nav';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing(),
  },
});


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

class UpdateDream extends Component {


updateDream = () =>{
  console.log('Update dream')
  // dispatch to saga for put axios call
}

  render() {
    return (
      <div>
        <Nav/>
        <h1>Update Dream Page</h1>
        <Button onClick={this.updateDream}>Update</Button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(UpdateDream));
