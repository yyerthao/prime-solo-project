import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Nav from '../Nav/Nav';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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


    state = {
      title: '',
      date: '',
      image: '',
      details: '',
      genre_id: '',
    };


componentDidMount(){
  this.props.dispatch({type: 'FETCH_GENRE'});
}

saveUpdate = () =>{
  console.log('Updated dream')
  // dispatch to saga for put axios call
}



handleSubmit = () => {
  console.log('handleSubmit working')
  // this.props.dispatch({
  //   type: 'UPDATE_DREAM',
  //   payload: this.state
  // });
  this.setState({
    title: '',
    date: '',
    image: '',
    details: '',
    genre_id: ''
  })
  // after clicking on button 'Save', goes to viewDream page
  // this.props.history.push('/viewDreams');

  // call sweeetAlerts swal here
}



handleChange = (event, input) => {
  console.log('Details of dreams:', this.state);
  this.setState({
    ...this.state,
    [input]: event.target.value
  })
}

  render() {
    const{update} = this.props.store;
    return (
      <div>
        <Nav/>
        <h1>Update Dream Page</h1>

                {JSON.stringify(update)}

        
          <div className="form-control-start">
                <div>
                
                {update.map((update, i)=>{
                  return (
                    <div key={i}>
                      <FormControl>
                        <TextField 
                          placeholder="Title"
                              value={this.state.title}
                          onChange={(event) => this.handleChange(event, 'title')}>
                        </TextField>
                        <TextField 
                            placeholder="Date"
                              value={this.state.date}
                              onChange={(event) => this.handleChange(event, 'date')}>
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
                          </FormControl>
                        </div>
                    )})
                  } 





                  
                  </div>
      {/* ----------------------------------------------- DROP DOWN MENU -------------------------------------------------------------------- */ }
                  <div> 
                    {/* {
                      JSON.stringify(this.props)
                    } */}
                          {/* START OF DROP DOWN MENU */}
                          <FormControl>
                              <InputLabel>
                                  Genre
                              </InputLabel>
                              <Select 
                                  className="dropdown"
                                  value={this.state.genre_id} 
                                  onChange={(event) => this.handleChange(event, 'genre_id')}>
      {/* ------------------------------------------------------------------MAPPING OUT ARRAY OF GENRES REDUCER */}
                                  
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
                onClick={this.handleSubmit}>
                  Submit Dream
              </Button>


         </div>                         
        {/* <Button onClick={this.saveUpdate}>Update</Button> */}


        
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(UpdateDream));
