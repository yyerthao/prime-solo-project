import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ViewDreams extends Component {
  state = {
    heading: 'View Dreams',
  };

componentDidMount(){
console.log('Inside View Dreams');
this.props.dispatch({type: 'FETCH_DREAM'});
}

selectDream = (id) => {
console.log('Getting id details')
// this.props.dispatch({type: 'GET_DREAM', payload: id})
// this.props.history.push('/onedream') 
}

render(){
    return(
      <div>
        <h2>View Dreams</h2>
        {/* {this.props.store.dream.map((dream, i) => (
          <div className="dream-cards" key={i}>
            <h4>{dream.title}</h4>
            <img  src={dream.image}
                  alt="Dream Image"
                  onClick={() => this.selectDream(dream.id)}>
            </img>
          </div> 
        ))} */}
      </div>
    )
  }
}


export default connect(mapStoreToProps)(ViewDreams);
