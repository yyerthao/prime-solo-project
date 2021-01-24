import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import UpdateDreamNav from '../UpdateDreamNav/UpdateDreamNav';
import Swal from 'sweetalert2';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../DreamItem/DreamItem.css';



const styles = theme => ({
  button: {
    margin: theme.spacing(),
  },
});



class DreamItem extends Component {

 

  deleteDream = (id) => {
    console.log('Deleting dream with id # ', id)
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
        this.props.dispatch({type:'DELETE_DREAM', payload: id})
        Swal.fire(
          'Deleted!',
          'Your dream has been deleted.',
          'success'
        )
        // dispatch to delete dream in here
      }
      this.props.history.push('/viewDreams')
    })
  }

  updateDream = (id) => {
      console.log('Selecting this dream to update: ', id);
      this.props.dispatch({type:'GET_NEW_DREAM', payload: id});
      this.props.history.push('/updateDream')
  }



  render() {
        const {details} = this.props.store;
    return (
      <div>
        <UpdateDreamNav/>
        {/* {JSON.stringify(details)} */}
          
          {/* ---------------------------------------------  */}
        <div className="center center-div ">
        {details.map((details, i) => {
          return (
          <div className="margin-text" key={i}>
              <h1 className="title-margin">{details.title}</h1>
              <h3 className="date-margin">{details.to_char}</h3>
              <img src={details.image} alt="Dream" className="dream-image"></img>
              <h3>Genre: {details.name}</h3>
              <p className="justified-text-dream-details margin-bottom">{details.details}</p>
                  <Button
                      variant="contained"
                      color="secondary" 
                      className="delete-button" 
                      onClick={()=> this.deleteDream(details.id)}>Delete</Button>
                      <span className="space-between-buttons"></span>
                  <Button 
                      variant="contained"
                      color="primary"
                      className="update-button" 
                      onClick={() => this.updateDream(details.id)}>Update</Button>
          </div>
              )
            })}

          <br></br>

        </div>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(DreamItem));
