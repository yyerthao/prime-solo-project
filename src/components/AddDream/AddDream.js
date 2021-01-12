import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AddDream extends Component {
  state = {
    heading: 'Add Dream',
  };


componentDidMount(){
  console.log('Inside AddDream component');
  
}



submit = () =>{
  console.log('Submitting dream');
  // this.props.dispatch({type: ''})
  
}


  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <form onSubmit={this.submitDream}>
          <label>Title</label>
            <input></input>
          <label>Date</label>
            <input></input>
          <label>Image Url</label>
            <input></input>
            <br></br>
          <label>Details</label>
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
