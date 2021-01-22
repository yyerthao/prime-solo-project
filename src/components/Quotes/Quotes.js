import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class Quotes extends Component {


  render() {
    return (
      <div>
        <p className="center justified-text">This is where the random quotes will generate</p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Quotes);
