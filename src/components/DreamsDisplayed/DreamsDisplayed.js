import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class DreamsDisplayed extends Component {
  state = {
    heading: 'Dreams Displayed',
  };


componentDidMount(){
  this.props.dispatch({type: 'FETCH_DREAM'});
}  

selectDream = (id) => {
console.log('Getting id details: ', id)
this.props.dispatch({type: 'GET_DETAIL', payload: id})
this.props.history.push('/dreamItem') 
}


  render() {
    const {dream} = this.props;
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <div className="img-div" key={this.props.i}>
            <h4>{dream.title}</h4>
              <h5>Genre:{dream.name}</h5>
            <img
                src={dream.image}
                alt="Dream"
                onClick={() =>this.selectDream(dream.id)}

  
                >
                  
            </img>
            <h5>{dream.to_char}</h5>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DreamsDisplayed);
