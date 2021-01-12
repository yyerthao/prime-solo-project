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


componentDidMount(){
  console.log('Inside AddDream component');
  
}



handleSubmit = (event) =>{
  event.preventDefault();
  console.log('Submitting dream');
  this.props.dispatch({type: 'POST_DREAM', payload: this.state})
  
}

handleChange = (event, input) => {
  console.log('Handling change');
  event.preventDefault();
  this.setState({
    [input]: event.target.value 
  })
  
}


  render() {
    return (
      <div className="center">
        <h2>Add Dream</h2>
        <form onSubmit={this.handleSubmit}>
              <input placeholder="Title"></input>
              <input placeholder="Date"></input>
              <input placeholder="Image Url"></input>
            <textarea 
              rows="5" 
              cols="80" 
              id="comment"
              className="dream-input-box" 
              type="text" 
              placeholder="Dream details"
              value={this.comments} 
              onChange={this.handleChange}>
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
