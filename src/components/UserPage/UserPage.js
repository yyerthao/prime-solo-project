
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
              <div className="button-container center-text padding-top">
                <h4 className="user-page-greeting">
                  Though there may be hindrances within the creative journey, dreams persevere.
                  Utilize your mind's natural creative element by exploring the known and unknown.
                  As there are endless x amounts of ideas and possibilities for content creation,
                  why not utilize what has been effortlessly given to you while you were sleeping?
                </h4>
                  <Button variant="contained" className="add-dream-btn" onClick={this.addDream}>Add Dream</Button>
                    <span className="space-between-buttons"></span>
                  <Button variant="contained" className="view-dream-btn" onClick={this.viewDreams}>View Dreams</Button>
              </div>
            

                  <div className="video-container">
                    <video loop autoPlay muted className="center-video">
                        <source src={video1} type="video/mp4"/>
                    </video>
                  </div>
                        <hr className="below-video-hr" width="40%"></hr>
                </div>
              <br></br>
          <Quotes/>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withStyles(styles)(UserPage));
