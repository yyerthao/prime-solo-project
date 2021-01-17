import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Nav from '../Nav/Nav';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class DreamItem extends Component {
  state = {
    // heading: 'Class Component',

  };




  render() {
        const {details} = this.props.store;
    return (
      <div>
        <Nav/>
        {/* {JSON.stringify(this.props.store.details)} */}
          
          {/* ---------------------------------------------  */}
        {details.map((details, i) => {
          return (
            <div key={i}>
          <h4>Title: {details.title}</h4>
          <h5>Date: {details.to_char}</h5>
          <img src={details.image} alt="Dream"></img>
          <h5>Genre: {details.name}</h5>
          <p>{details.details}</p>
            </div>
          )
        })}

      </div>
    );
  }
}

export default connect(mapStoreToProps)(DreamItem);
