import React from 'react';
import Nav from '../Nav/Nav';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="about-page-container">
    <Nav/>
    <div>
      <h1>About</h1>
      <p>
      The human mind always ticks. It interprets things in our wake and
      </p>
      <p>
      it interprets things while we sleep. 
      This process is called dreaming. 
      </p>
      <p>
      While we sleep, our mind attempts to make sense of things we may have 
      </p>
      <p>
      encountered, things we simply looked at without a second thought on.
      </p>
    </div>
  </div>
);

export default AboutPage;
