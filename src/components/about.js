import React from 'react';
import styled from 'styled-components';

import facund from '../images/facund.png';

const About = ({ className }) => {
  return (
    <section className={className + ' section'}>
      <div className="container">
        <h2 className="title is-2 has-text-centered">
          <span className="underline-green-light">About me</span>
        </h2>
        <div className="container about-container">
          <div className="columns">
            <div className="column margin-center is-three-quarters">
              <div className="columns is-vcentered">
                <div className="column is-one-fifth center">
                  <figure className="image is-128x128">
                    <img
                      className="is-rounded"
                      src={facund}
                      alt="facund fortuny"
                    ></img>
                  </figure>
                </div>
                <div className="column vertical-align">
                  <p className="is-4 has-text-grey">
                    I am a Frontend Developer living in Barcelona. I was born
                    and raised in Alaior, Menorca and I moved to Barcelona to
                    study Software Engineering. I am highly organised,
                    efficient, self-starter and problem-solving software
                    engineer focusing on Web Development. I am always looking
                    for the next challenge whether it be within programming or
                    my other areas of interest. I have a few different passions:
                    programming, running, hiking, climbing and cooking.
                  </p>
                  <br></br>
                  <p className="is-4 has-text-grey">
                    I have been involved in software development for some years
                    now, I have worked in several countries, collaborating with
                    multicultural teams and using different agile methodologies.
                    Lately, as a freelancer, I have been working on multiple
                    frontend projects using technologies like Javascript,
                    Angular, React, GatsbyJS, NodeJS, Electron, Ionic, GraphQL,
                    Webpack.
                  </p>
                </div>
              </div>
            </div>
            <div className="column">
              <h3 className="title is-3">Top Skills:</h3>
              <div className="is-4 content">
                <ul className="skills">
                  <li>
                    <span className="label-green">Javascript</span>
                  </li>
                  <li>
                    <span className="label-green">HTML</span>
                  </li>
                  <li>
                    <span className="label-green">CSS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default styled(About)`
  .about-container {
    padding: 30px;
  }

  .skills {
    list-style: none;
    flex-direction: column;
    margin-top: 0px;
    margin-left: 5px;
  }

  .label-green {
    background-color: #cdf2e2;
    padding: 0.25rem 0.75rem;
    font-weight: 300;
    font-size: 1.5rem;
    color: #1f1f1f;
    margin-bottom: 0.25rem;
  }
`;
