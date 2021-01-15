import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../ViewDreams/ViewDreams.css';
import Nav from '../Nav/Nav';


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
console.log('Getting id details: ', id)
// this.props.dispatch({type: 'GET_DREAM', payload: id})
// this.props.history.push('/onedream') 
}

render(){
    return(
      <div>
        <Nav/>
        <h2>View Dreams</h2>
        {/* ----------------------------------------------------------------- */}
          {this.props.store.dream.map((dream, i) => {
                return (
                    <div className="img-div" key={i}>
                        <h4>{dream.title}</h4>
                        {/* <h5>Genre: {dream.id}</h5> */}
                        <img
                            src={dream.image}
                            alt="Dream"
                            onClick={() => this.selectDream(dream.id)}
                            >
                        </img>
                        <h5>{dream.date}</h5>
                    </div>
                )
            })
          }

{/* Just troubleshooting on DOM  */}
{/* {JSON.stringify(this.props.store.dream)} */}




      </div>
    )
  }
}


export default connect(mapStoreToProps)(ViewDreams);
