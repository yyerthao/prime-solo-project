import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Canvas from '../Canvas/Canvas';
import NavUser from '../NavUser/NavUser';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class DrawPad extends Component {
  state = {
    heading: 'DrawPad Component',
  };

  render() {
    return (
      <div className='container'>
        <NavUser/>
        <center>
        {/* <h2>{this.state.heading}</h2> */}
        </center>
        <div className="border-canvas">
        <Canvas></Canvas>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DrawPad);
