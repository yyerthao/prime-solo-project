import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../ViewDreams/ViewDreams.css';
import Nav from '../Nav/Nav';
// import DreamsDisplayed from '../DreamsDisplayed/DreamsDisplayed';
// import swal from dependency sweetalert2
// import swal from 'sweetalert2'



// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class ViewDreams extends Component {


componentDidMount(){
this.props.dispatch({type: 'FETCH_DREAM'});
// swal.fire("Welcome to your dreams!");
}

selectDream = (id) => {
console.log('This is the ID of the movive you\'ve clicked on: ', id)
this.props.dispatch({type: 'GET_DETAIL', payload: id})
this.props.history.push('/dreamItem') 
}



render(){
    const {dream} = this.props.store;
    return(
      <div>
        <Nav/>
        <h2>View Dreams</h2>
        {/* ----------------------------------------------------------------- */}
          {dream.map((dream, i) => {
                return (
                  // move below to new component 
                  // utilize props

                    <div className="img-div" key={i}>
                        <h4>{dream.title}</h4>
                          <h5>Genre:
                            {JSON.stringify(dream)}
                            {dream.name}</h5>
                        <img
                            src={dream.image}
                            alt="Dream"
                            onClick={() => this.selectDream(dream.id)} // dream.id has nothing to latch onto 
                            >
                        </img>
                        <h5>{dream.to_char}</h5>
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
