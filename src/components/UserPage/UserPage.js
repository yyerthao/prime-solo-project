
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import NavUser from '../NavUser/NavUser';
import '../UserPage/UserPage.css';
import '../UserPage/UserPage.css';
import '../ViewDreams/ViewDreams';
import Quotes from '../Quotes/Quotes';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import video1 from '../UserPage/Video/Galaxy.mp4';





const styles = theme => ({
  button: {
    margin: theme.spacing(),

  },
});


class UserPage extends Component {


addDream = () => {
  console.log('Add dream button clicked');
  this.props.history.push('/addDream');

}

viewDreams = () => {
  console.log('View dreams button clicked');
  this.props.history.push('/viewDreams');
}


  render() {
    return (
      <div>
        <NavUser/>
            <div>
              <div className="button-container center-text">
                  <Button variant="contained" className="add-dream-btn" onClick={this.addDream}>Add Dream</Button>
                    <span className="space-between-buttons"></span>
                  <Button variant="contained" className="view-dream-btn" onClick={this.viewDreams}>View Dreams</Button>
              </div>
              <div>
                <p className="user-page-greeting">
                  Think outside the box.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perferendis quo iste perspiciatis, laboriosam pariatur nihil sequi molestias omnis tempore alias!Commodi et modi, laboriosam eveniet sapiente sequi neque!Omnis, corrupti.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perferendis quo iste perspiciatis, laboriosam pariatur nihil sequi molestias omnis tempore alias!Commodi et modi, laboriosam eveniet sapiente sequi neque!Omnis, corrupti.
                </p>
              </div>
                  <div className="video-container">
                    <video loop autoPlay muted className="center-video">
                        <source src={video1} type="video/mp4"/>
                    </video>
                  </div>
                        <hr className="below-video-hr" width="50%"></hr>
                        <hr className="hr-hr" width="50%"></hr>
                </div>
              <br></br>
          <Quotes/>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withStyles(styles)(UserPage));
