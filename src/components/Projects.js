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
                <p className="img-desc"><span className="coral-span">Woosreads</span>, a full-stack MERN application using Create-React-App.</p>
                <img src={require('../images/woosreads.gif')} alt="woosreads app"/>
              </div>
            </div>
            <div className="column is-half">
              <div className="box">
                <p className="img-desc">A site built for <span className="coral-span">SwipeRight LLC</span>, using SASS & Bootstrap.</p>
                <img src={require('../images/swipe-right.gif')} alt="swipe right site"/>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box">
                <p className="img-desc">A US Census <span className="coral-span">data viz project</span> built with D3, React, & Bulma CSS.</p>
                <img src={require('../images/d3-chart.gif')} alt="census data viz app"/>
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