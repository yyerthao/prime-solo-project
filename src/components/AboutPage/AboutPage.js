import React from 'react';
import Nav from '../Nav/Nav';
import '../AboutPage/AboutPage.css';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <Nav/>
      <div className="about-page-container center">
        <p className="about-page-justified">
          Every writer who has been diagnosed with writer's block, knows how painful it can be.
          It strikes aggressively, and often. The Dream App allows a solution for writers to store  
          and manage their dreams. 
          <br></br>
          <br></br>
          Dreams, in true form, are our mind's interpretations of things we have may  
          encountered well and up front in our wake state, or things we merely brushed while en route 
          somewhere. 
        </p>


    </div>
  </div>
);

export default AboutPage;
