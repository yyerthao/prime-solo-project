import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Nav from '../Nav/Nav';
import Swal from 'sweetalert2';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class DreamItem extends Component {


  deleteDream = () => {
    console.log('Deleting dream')
    // will be dispatching action for delete route here
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your dream has been deleted.',
          'Success'
        )
      }
    })
  }

  updateDream = () => {
    console.log('Updating dream')
    // will be dispatching action here for PUT route
  }


  render() {
        const {details} = this.props.store;
    return (
      <div>
        <Nav/>
        {/* {JSON.stringify(this.props.store.details)} */}
          
          {/* ---------------------------------------------  */}
        <div className="center-div">
        {details.map((details, i) => {
          return (
            <div key={i}>
          <h2>Title: {details.title}</h2>
          <h5>Date: {details.to_char}</h5>
          <img src={details.image} alt="Dream"></img>
          <h5>Genre: {details.name}</h5>
          <p>{details.details}</p>
            </div>
          )
        })}


          <button className="delete-button" onClick={this.deleteDream}>Delete</button>
          <button className="update-button" onClick={this.updateDream}>Update</button>
        </div>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(DreamItem);
