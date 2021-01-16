import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
// import details from '../../redux/reducers/details.reducer';
import Nav from '../Nav/Nav';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class DreamItem extends Component {
  state = {
    // heading: 'Class Component',

  };


  // componentDidMount(){
  //   this.props.dispatch({type: 'GET_DETAIL'});
  // }

  render() {
    return (
      <div>
        <Nav/>
        {JSON.stringify(this.props.store.details)}
        {/* <h2>{details.title}</h2> */}


      </div>
    );
  }
}

export default connect(mapStoreToProps)(DreamItem);
