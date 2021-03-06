import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import UpdateDreamNav from '../UpdateDreamNav/UpdateDreamNav';
import '../AddDream/AddDream.css';
import Swal from 'sweetalert2';


// Material-UI information
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';



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
class AddDream extends Component {
  
  state = {
    title: '',
    date: '',
    image: '',
    details: '',
    genre_id: '',
  };


  // testing to ensure add dream component was working
componentDidMount(){
    this.props.dispatch({type:'FETCH_GENRE'});
}


cancelSubmit = () => {
  console.log('Cancelled submission');
  // this.props.dispatch({type:'CANCEL_ADD_MOVIE'})
    this.setState({
      title: '',
      date: '',
      image: '',
      details: '',
      genre_id: ''
    })
    Swal.fire({
     title: 'Confirm cancel?',
     text: "Ponder on that a bit more will you?",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes! I am sure'
   }).then((result) => {
     if (result.isConfirmed) {
       Swal.fire(
         'Cancelled!',
         'Submission of dream cancelled.',
         'success'
         )
        }
        this.props.history.push('/viewDreams');
      });
}

handleSubmit = () => {
  console.log('handleSubmit working')
    this.props.dispatch({type: 'POST_DREAM', payload: this.state});
    this.setState({
        title: '',
        date: '',
        image: '',
        details: '',
        genre_id: ''
    })
    // after clicking on button 'Save', goes to viewDream page
    this.props.history.push('/viewDreams');
}


// this just allows us to type inside input fields
handleChange = (event, input) => {
  console.log('Details of dreams:', this.state);
  this.setState({
    ...this.state, 
    [input]: event.target.value
  })
}


  render() {
    return (
      <div>
        <UpdateDreamNav/>
{/* ------------------------------------------------- INPUT FIELDS ------------------------------------------------------------------ */ }
        <div className="form-control-start">
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
              
              <br></br>
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
{/* ----------------------------------------------- MAPPING OUT ARRAY OF GENRES REDUCER */}
                            
                            {this.props.store.genre.map((genre, i) =>
                                <MenuItem key={i} value={genre.id}>
                                    {genre.name}
                                </MenuItem>)}
                        </Select>
                    </FormControl>
              </div>
{/* ------------------------------------------------ BUTTONS ------------------------------------------------------------------- */ }

          <div className="buttons-in-line">

            <Button
              style={{maxWidth: '5.5rem', maxHeight: '36px', minWidth: '4rem', minHeight: '36px', marginLeft:"25rem"}}
              variant="contained"
              color="secondary"
              className="submit-dream-btn"
              onClick={this.cancelSubmit}>
                Cancel
            </Button>
              <Button 
                style={{maxWidth: '5.5rem', maxHeight: '36px', minWidth: '4rem', minHeight: '36px', marginRight:'8rem'}}
                variant="contained"
                color="primary"
                className="submit-dream-btn"
                onClick={this.handleSubmit}>
                  Submit
              </Button>
            </div>
        </FormControl>
      </div>
    </div>
    );
  }
}


export default connect(mapStoreToProps)(withStyles(styles)(AddDream));
