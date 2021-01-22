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
      <div className="about-page-container">
        <p>
          Every writer who has been diagnosed with writer's block, knows how painful it can be.
          This diagnosis strikes aggressively, and often. The Dream Catcher application 
        </p>


    </div>
  </div>
);

export default AboutPage;
