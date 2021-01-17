import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Nav from '../Nav/Nav';
import '../AddDream/AddDream.css';

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



handleChange = (event, input) => {
  console.log('Details of dreams:', this.state);
  this.setState({
    ...this.state, 
    [input]: event.target.value
  })
}


  render() {
    // const { classes } = this.props;
    return (
      <div className="container">
        <Nav/>
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
              className="submit-dream-btn"
              onClick={this.cancelSubmit}>
                Cancel
            </Button>

              <Button 
                className="submit-dream-btn"
                onClick={this.handleSubmit}>
                  Submit Dream
              </Button>
        </FormControl>

      </div>
    </div>

    );
  }
}


export default connect(mapStoreToProps)(withStyles(styles)(AddDream));
