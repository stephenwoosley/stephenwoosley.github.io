import React from 'react';
import 'bulma/css/bulma.css';

const Projects = (props) => {
  return(
    <div>
      <section>
        <div className="projects-content">
          <div className="columns">
            <div className="column">
              <div className="box">
                <p className="img-desc"><span className="coral-span"><a href="http://woosreads.herokuapp.com/">Woosreads</a></span>, a full-stack MERN application built with Create-React-App.</p>
                <a href="http://woosreads.herokuapp.com/"><img src={require('../images/woosreads.gif')} alt="woosreads app"/></a>
              </div>
            </div>
            <div className="column is-half">
              <div className="box">
                <p className="img-desc">A site built for <span className="coral-span"><a href="https://stephenwoosley.github.io/SwipeRight/">SwipeRight LLC</a></span>, using SASS & Bootstrap.</p>
                <a href="https://stephenwoosley.github.io/SwipeRight/"><img src={require('../images/swipe-right.gif')} alt="swipe right site"/></a>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box">
                <p className="img-desc">A US Census <span className="coral-span"><a href="https://stephenwoosley.github.io/frontend-dev-exercises/">data viz project</a></span> built with D3, React, & Bulma CSS.</p>
                <a href="https://stephenwoosley.github.io/frontend-dev-exercises/"><img src={require('../images/d3-chart.gif')} alt="census data viz app"/></a>
              </div>
            </div>
            <div className="column is-half">
              <div className="box">
              <p className="img-desc"><span className="coral-span">Wooslist</span>, a React/Flexbox to-do app built without Create-React-App.</p>
              <img src={require('../images/wooslist.png')} alt="wooslist app"/>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Projects;