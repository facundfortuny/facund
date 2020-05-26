import React from 'react';

import Timeline from './timeline';
import work from '../images/work.svg';

const Experience = () => {
  return (
    <section className="section hero is-light" id="experience">
      <div className="container">
        <div className="content has-text-centered">
          <h2 className="title is-2">
            <span className="underline-green-light">Experience</span>
          </h2>
        </div>
        <div className="columns is-vcentered">
          <div className="column is-one-third">
            <img className="work-image" src={work} alt="work-ilustration" />
          </div>
          <div className="column">
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
