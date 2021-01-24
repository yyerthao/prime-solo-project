import React from 'react';
import Nav from '../Nav/Nav';
import '../AboutPage/AboutPage.css';
import video2 from '../AboutPage/transform.mp4';


// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <Nav/>
      <div className="about-page-container center">
        <p className="about-page-justified">
          Every writer who has been diagnosed with writer's block, knows how distressing it can be.
          It strikes aggressively, often, and sometimes never truly leaves. The Dream App allows a solution 
          to this.
          <br></br>
          <br></br>
          Dreams are our mind's interpretations of things we have may  
          encountered well and up front. Whether these encounters were done in our wake state, 
          or things we merely brushed while en route somewhere. 
          <br></br>
          <br></br>          
          The Dream App concept is simple but effective, "The creativity has already been done, all that's 
          left to do is extraction" of the details and storing it away. And ... perhaps several years of editing (but we'll
          cross that bridge too!)
          <br></br>
          <br></br>
          Usage of this application will save users time on the initial process of content planning. This will replace 
          traditional dream diaries with its unique features of image url and genre categorization.
          <br></br>
          <br></br>
        </p>
          <div className="video-container">
              <video loop autoPlay muted className="about-video" width="50" height="475">
                  <source src={video2} type="video/mp4" alt=""/>
              </video>
          </div>
    </div>
  </div>
);

export default AboutPage;
