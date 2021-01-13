import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Material-UI information
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';



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
        width: 400,
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
    // heading: 'Add Dream',
    title: '',
    date: '',
    image: '',
    details: '',
    genre: '',
  };


  // testing to ensure add dream component was working
componentDidMount(){
  console.log('Inside AddDream component');
}



handleSubmit = (event) =>{
  event.preventDefault();
  console.log('Submitting dream');
  this.props.dispatch({type: 'POST_DREAM', payload: this.state})
}

handleChange = (event, input) => {
  console.log('Details of dreams:', this.state);
  event.preventDefault();
  this.setState({
    ...this.state,
      [input]: event.target.value 
    })
}


  render() {
    // const { classes } = this.props;

    return (
      <div className="center">
        <h2>Add Dream</h2>

        {/* ----------------------------------------------------------------------------------------- */}
        <FormControl onSubmit={(event) => this.handleSubmit(event)}>
              <TextField 
                placeholder="Title" 
                onChange={(event) => this.handleChange(event, 'title')}>
              </TextField>

              <TextField 
                placeholder="Date"
                onChange={(event) => this.handleChange(event, 'date')}>

            
              </TextField>

              <TextField 
                placeholder="Image Url"
                onChange={(event) => this.handleChange(event, 'image')}>

              </TextField>
                <br></br>
              <textarea
                rows="10" 
                cols="80" 
                id="comment"
                className="dream-input-box" 
                type="text" 
                placeholder="Dream details"
                value={this.comments} 
                onChange={(event) => this.handleChange (event, 'details')}>
              </textarea>
            <br></br>

              <Button 
                className="submit-dream-btn"
                type="submit">
                  Submit Dream
              </Button>

        

          {/* ----------------- TODO -----------------
                - Add a genre drop down menu here
                - MAP out genre here
                - 
            --------------------------------------------*/}
            
        </FormControl>

        {/* ----------------------------------------------------------------------------------------- */}





      </div>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(AddDream));
