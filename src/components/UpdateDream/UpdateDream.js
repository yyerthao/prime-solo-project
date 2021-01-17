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


componentDidMount(){
  this.props.dispatch({type:'GET_NEW_DREAM'})
}

saveUpdate = () =>{
  console.log('Updated dream')
  // dispatch to saga for put axios call
}

  render() {
    const{updatedDream} = this.props.store;
    return (
      <div>
        <Nav/>
        <h1>Update Dream Page</h1>

        {JSON.stringify(updatedDream)}


        <Button onClick={this.saveUpdate}>Update</Button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(UpdateDream));
