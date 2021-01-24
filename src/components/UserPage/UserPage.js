
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
                <p className="justified-text margin-bottom"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi soluta rerum mollitia, saepe commodi dolore provident 
                maiores vitae aut debitis modi tempora minima quis, placeat rem 
                facilis voluptatum dignissimos beatae! 
                </p>
                  <Button variant="contained" className="add-dream-btn" onClick={this.addDream}>Add Dream</Button>
                    <span className="space-between-buttons"></span>
                  <Button variant="contained" className="view-dream-btn" onClick={this.viewDreams}>View Dreams</Button>
              </div>
                    <video loop autoPlay muted className="center-video">
                        <source src={video1} type="video/mp4" />
                    </video>
                        <hr className="below-video-hr" width="50%"></hr>
                        <hr className="hr-hr" width="50%"></hr>
              </div>
          <Quotes/>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withStyles(styles)(UserPage));
