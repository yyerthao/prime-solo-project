import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
  // this.props.dispatch({type: 'POST_DREAM', payload: this.state})
  
}

handleChange = (event, input) => {
  console.log('Details of dreams:', this.state);
  
  console.log('Handling change');
  event.preventDefault();
  this.setState({
    ...this.state,
      [input]: event.target.value 
    })
}


  render() {
    return (
      <div className="center">
        <h2>Add Dream</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
              <input 
                placeholder="Title" 
                onChange={(event) => this.handleChange(event, 'title')}>
              </input>
              <input 
                placeholder="Date"
                onChange={(event) => this.handleChange(event, 'date')}>

            
              </input>
              <input 
                placeholder="Image Url"
                onChange={(event) => this.handleChange(event, 'url')}>

              </input>
            <textarea 
              rows="5" 
              cols="80" 
              id="comment"
              className="dream-input-box" 
              type="text" 
              placeholder="Dream details"
              value={this.comments} 
              onChange={(event) => this.handleChange (event, 'details')}>
            </textarea>
            <br></br>
              <button 
                className="submit-dream-btn"
                type="submit">Submit Dream
              </button>

        

          {
            /* ----------------- TODO -----------------
                - Add a genre drop down menu here
                - MAP out genre here
                - 
            --------------------------------------------*/
          }













        </form>




      </div>
    );
  }
}

export default connect(mapStoreToProps)(AddDream);
