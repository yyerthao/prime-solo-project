import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import  './Quotes.css';


const styles = theme => ({
  button: {
    margin: theme.spacing(),
  },
});


class Quotes extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  } 



componentDidMount() {
      this.getQuote();
   }


   // come back later and just add your own list of writer's quotes array 
   getQuote() {
      let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

      axios.get(url)
         .then(res => {
            let data = res.data.quotes
            let quoteNum = Math.floor(Math.random() * data.length) //quote number
            let randomQuote = data[quoteNum] //actual quote
            this.setState({
               quote: randomQuote['quote'],
               author: randomQuote['author']
            })
         })
   }





  getNewQuote = () => {
      this.getQuote()
   }

 render() {
      const { quote, author } = this.state //Destructuring
      return (
         <div className="center">
               <Button color="primary" variant="contained" onClick={this.getNewQuote}>GET INSPIRED</Button>
            <div className="center box-container">
               {/* <hr className="quote-hr"></hr>
               <hr className="second-quote-hr"></hr> */}
                  <h4 className="quote-text">"{quote}"</h4>
                     <h5 className="quote-author">- {author}</h5>
                     <a href={`https://type.fit/api/quotes=${quote} ${author}`} target='_blank' rel="noopener noreferrer" title="Twitter random quote generator"><style>font-size: 0</style></a>
               <br></br>
               <br></br>
            </div>
         </div>
      )
   }
}

export default connect(mapStoreToProps)(withStyles(styles)(Quotes));
