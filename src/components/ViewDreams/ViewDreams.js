import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../ViewDreams/ViewDreams.css';
import Nav from '../Nav/Nav';
// import DreamsDisplayed from '../DreamsDisplayed/DreamsDisplayed';
// import swal from dependency sweetalert2
// import swal from 'sweetalert2'


// STYLING: Material-UI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';





const styles = {
root: {
  flexGrow: 1,
},
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width: 320
  },
};



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

  state = {
    spacing: '16',
  };


render(){
    const {dream} = this.props.store;
      const { classes } = this.props;
          // const { spacing } = this.state;

    return(
      <div>
        <Nav/>
          <div className="center-div">

            <Grid container className={classes.root} spacing={16}>
              <Grid item xs={12}>
                {/* <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                  {[0, 1, 2].map(value => (
                    <Grid key={value} item>
                      <Paper className={classes.paper} />
                    </Grid>
                  ))}
                </Grid> */}
              </Grid>



        {/* ----------------------------------MAPPING OUT DREAMS------------------------------- */}
          {dream.map((dream, i) => {
                return (
                  // move below to new component 
                  // utilize props

                    // <div className="img-div" key={i}>
                    //     <h4>{dream.title}</h4>
                    //       <h5>Genre:
                    //         {dream.name}</h5>
                    //     <img
                    //         src={dream.image}
                    //         alt="Dream"
                    //         onClick={() => this.selectDream(dream.id)} 
                    //         >
                    //     </img>
                    //     <h5>{dream.to_char}</h5>
                    // </div>

             <div className="card-layout" key={i}>     
              <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      onClick={()=> this.selectDream(dream.id)}
                      className={classes.media}
                      image={dream.image}
                      title={dream.title}
                      // value={spacing}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {dream.title}
                      </Typography>
                      <Typography component="p">
                        {dream.to_char}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary"
                    onClick={()=> this.selectDream(dream.id)}>
                      Visit Dream
                    </Button>
                  </CardActions>
              </Card>
              </div>
                )
            })
          }
          {/* -------------------------------END MAP---------------------------------- */}

        </Grid>
        </div>


{/* Just troubleshooting on DOM  */}
{/* {JSON.stringify(this.props.store.dream)} */}




      </div>
    )
  }
}

ViewDreams.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStoreToProps)(withStyles(styles)(ViewDreams));
