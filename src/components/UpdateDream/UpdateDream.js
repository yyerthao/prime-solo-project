import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import UpdateDreamNav from '../UpdateDreamNav/UpdateDreamNav';
import Swal from 'sweetalert2';


import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.

class UpdateDream extends Component {
  

    state = {
      title: this.props.store.update.title,
      to_char: this.props.store.update.date,
      image: this.props.store.update.image,
      details: this.props.store.update.details,
      genre_id: '',
      // value: RichTextEditor.createEmptyValue()
    };


componentDidMount(){
  this.props.dispatch({type: 'FETCH_GENRE'});
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
     confirmButtonText: 'Yes, delete it!'
   }).then((result) => {
     if (result.isConfirmed) {
       Swal.fire(
         'Deleted!',
         'Editing of dream cancelled.',
         'success'
       )
      }
      this.props.history.push('/viewDreams')
   });
   this.setState({
      title: this.props.store.update.title,
      to_char: this.props.store.update.date,
      image: this.props.store.update.image,
      details: this.props.store.update.details,
      genre_id: this.props.store.genre.name,
   })
 }


updateDream = () => {
  console.log('Updating dream')
  this.props.dispatch({type: 'UPDATE_DREAM',payload: this.state});
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


  // onChange = (value) => {
  //   this.setState({
  //     value
  //   });
  //   if (this.props.onChange) {
  //     // Send the changes up to the parent component as an HTML string.
  //     // This is here to demonstrate using `.toString()` but in a real app it
  //     // would be better to avoid generating a string on each change.
  //     this.props.onChange(
  //       value.toString('html')
  //     );
  //   }
  // };


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
        {JSON.stringify(update)}
{/* ------------------------------------------------- INPUT FIELDS ------------------------------------------------------------------ */ }
          <div className="form-control-start">
            <FormControl>
                {/* {update.map((update, i)=>{
                  return ( */}
                    <FormControl>
                    {/* <div key={i}> */}
                        <TextField 
                          placeholder="Title"
                              value={this.state.title}
                          onChange={(event) => this.handleChange(event, 'title')}>
                        </TextField>
                        <TextField 
                            placeholder="Date"
                              value={this.state.to_char}
                              onChange={(event) => this.handleChange(event, 'to_char')}>
                        </TextField>
                        <TextField 
                            placeholder="Image Url"
                              value={this.state.image}
                            onChange={(event) => this.handleChange(event, 'image')}>
                        </TextField><br></br>
                        <textarea
                          rows="10" 
                              cols="80"
                            id="textarea"
                          className="dream-input-box" 
                        type="text" 
                          placeholder="Enter dream here"
                            value={this.state.details}
                              onChange={(event) => this.handleChange (event, 'details')}>
                            </textarea><br></br>

                                {/* <RichTextEditor
                                  value={this.state.value}
                                  onChange={this.onChange}
                                /> */}


                            
                          </FormControl>
                        {/* </div> 
                         )})
                      }  */}

{/* ----------------------------------------------- DROP DOWN MENU -------------------------------------------------------------------- */ }
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
{/* ------------------------------------------------ BUTTONS ------------------------------------------------------------------- */ }


            <Button
              color="secondary"
              className="submit-dream-btn"
              onClick={this.cancelSubmit}>
                Cancel
            </Button>

              <Button
                color="primary" 
                className="submit-dream-btn"
                onClick={this.updateDream}>
                  Update
              </Button>
            </FormControl>
         </div>                         
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(UpdateDream));
