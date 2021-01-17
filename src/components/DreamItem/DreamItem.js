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




  render() {
        // const {details} = this.props;
    return (
      <div>
        <Nav/>
        {JSON.stringify(this.props.store.details)}
          
          {/* ---------------------------------------------  */}


        {/* {details.map((details, i) => {
          return (
            <div>
            <h2>{details.title}</h2>
            <img 
            src={details.image} 
            alt="Dream">
            </img>
            <h4>

            Genre: {details.name}
            </h4>
            <p>
                {details.details}
            </p>
          </div>
          )
        })} */}


      </div>
    );
  }
}

export default connect(mapStoreToProps)(DreamItem);
