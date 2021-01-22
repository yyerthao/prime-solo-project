import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import UpdateDreamNav from '../UpdateDreamNav/UpdateDreamNav';
import Swal from 'sweetalert2';



import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


// import RichTextEditor from 'react-rte';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    width: 1000,
    background: "rgb(66, 116, 175, 0.2)"
  },
  dense: {
    marginTop: 29,
  },
  menu: {
    width: 600,
  },
  button: {
    margin: theme.spacing(),
  },
});


class UpdateDream extends Component {


    state = {
      title: '',
      to_char: '',
      image: '',
      details: '',
      genre_id: '',
    };


componentDidMount(){
  this.props.dispatch({type: 'FETCH_GENRE'}); // grabs all genres from DB for dropdown menu
  console.log('WOOT THERE IT IS')
  this.setState({
    title: this.props.store.details[0].title,
    to_char: this.props.store.details[0].to_char,
    image: this.props.store.details[0].image,
    details: this.props.store.details[0].details,
    genre_id: this.props.store.details[0].genre_id,
    })
}

 cancelSubmit = () => {
   console.log('Deleting dream')
   // will be dispatching action for delete route here
   Swal.fire({
     title: 'Confirm cancel edit?',
     text: "You will be losing your updated details!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, cancel edit!'
   }).then((result) => {
     if (result.isConfirmed) {
       Swal.fire(
         'Cancelled!',
         'Editing of dream cancelled.',
         'success'
       )
       //dispatch to delete dream in here 
      }
      this.props.history.push('/viewDreams')
   });
 }


updateDream = (dreamID) => {
  console.log('DREAM ID to update:', dreamID)
  this.props.dispatch({type: 'UPDATE_DREAM',payload: {id: dreamID, dreamDetails: this.state}});
  this.setState({
      title: '',
      date: '',
      image: '',
      details: '',
      name: '',
      genre_id: ''
  })
  // after clicking on button 'Save', goes to viewDream page
  this.props.history.push('/viewDreams');
}



handleChange = (event, input) => {
  console.log('Details of dreams:', this.state);
  this.setState({
    ...this.state,
    [input]: event.target.value,
  })
}

  render() {
    const{update} = this.props.store;
    return (
      <div className="container">
        <UpdateDreamNav/>
        
        
{/* ------------------------------------------------- INPUT FIELDS ------------------------------------------------------------------ */ }
          <div className="form-control-start">
            <FormControl>
                {update.map((update, i)=>{
                  return (
                    <FormControl key={i}>
                    {/* <div key={i}> */}
                        <TextField 
                          placeholder={this.state.title}
                          value={this.state.title}
                          onChange={(event) => this.handleChange(event, 'title')}>
                        </TextField>
                        <TextField 
                            placeholder={this.state.to_char}
                              value={this.state.to_char}
                              onChange={(event) => this.handleChange(event, 'to_char')}>
                        </TextField>
                        <TextField 
                            placeholder={this.state.image}
                              value={this.state.image}
                            onChange={(event) => this.handleChange(event, 'image')}>
                        </TextField><br></br>
                        <textarea
                          rows="10" 
                              cols="80"
                            id="textarea"
                          className="dream-input-box" 
                        type="text" 
                          placeholder={this.state.details}
                            value={this.state.details}
                              onChange={(event) => this.handleChange (event, 'details')}>
                            </textarea><br></br>


                  <div> 
                          <FormControl>
                              <InputLabel>
                                  Genre
                              </InputLabel>
                              <Select 
                                  className="dropdown"
                                  value={this.state.genre_id} 
                                  onChange={(event) => this.handleChange(event, 'genre_id')}>
{/* ------------------------------------------------ MAPPING OUT ARRAY OF GENRES REDUCER */}
                                  
                                  {this.props.store.genre.map((genre, i) =>
                                      <MenuItem key={i} value={genre.id}>
                                          {genre.name}
                                      </MenuItem>)}
                              </Select>
                          </FormControl>
                    </div>
                              <Button
                                // variant="contained"
                                color="secondary"
                                className="update-button"
                                onClick={this.cancelSubmit}>
                                  Cancel
                              </Button>
                              <Button
                                  // variant="contained"
                                  color="primary"
                                  className="update-button" 
                                onClick={()=>this.updateDream(update.id)}>
                                  Update
                              </Button>
                              
                          </FormControl>
                        // </div> 
                         )})
                      }  

{/* ----------------------------------------------- DROP DOWN MENU -------------------------------------------------------------------- */ }
{/* ------------------------------------------------ BUTTONS ------------------------------------------------------------------- */ }



            </FormControl>
         </div>                         
      </div>
    );
  }
}


export default connect(mapStoreToProps)(withStyles(styles)(UpdateDream));
