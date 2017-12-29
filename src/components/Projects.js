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
                <article className="media">
                  <div className="media-left">
                    <figure className="image">
                      <img src="../images/wooslist.png" alt="wooslist app"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                      </p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <a className="level-item">
                          <span className="icon is-small"><i className="fa fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                          <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                        </a>
                        <a className="level-item">
                          <span className="icon is-small"><i className="fa fa-heart"></i></span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure>
                      <img src="../images/woosreads.gif" alt="woosreads app"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                      </p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <a className="level-item">
                          <span className="icon is-small"><i className="fa fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                          <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                        </a>
                        <a className="level-item">
                          <span className="icon is-small"><i className="fa fa-heart"></i></span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Projects;