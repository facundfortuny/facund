import React from 'react';

import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const getImages = graphql`
  query {
    dxc: file(relativePath: { eq: "timeline/dxc.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    ic24: file(relativePath: { eq: "timeline/ic24.png" }) {
      childImageSharp {
        fixed(height: 65) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    scoota: file(relativePath: { eq: "timeline/scoota.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    qad: file(relativePath: { eq: "timeline/qad.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    truekkea: file(relativePath: { eq: "timeline/truekkealogo.png" }) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Timeline = ({ className }) => {
  const images = useStaticQuery(getImages);
  return (
    <div className={className + ' section'}>
      <div className="columns job-content">
        <div className="column is-one-fifth first-column is-ball bottom has-text-centered">
          <div className="circle">2020</div>
        </div>
        <div className="column has-text-left second-column">
          <div className="content">
            <Img
              className="image-logo"
              fixed={images.dxc.childImageSharp.fixed}
              alt="Scoota"
            />
          </div>
          <div className="content">
            <h3 className="title is-4">Lead Frontend Developer at DXC</h3>
            <h4 className="subtitle is-6">January 2018 - Present</h4>
            <p className="is-4">
              Assist with the implementation of a new Manufacturing Execution
              System (MES). Manage a remote team, with Scrum tasks, distributing
              workload, code reviewing and training. Application built using
              Angular 8, Electron, Ionic 4, RxJS.
            </p>
          </div>
        </div>
        <div className="column is-one-fifth third-column"></div>
      </div>

      <div className="columns timeline">
        <div className="column is-one-fifth corner-container">
          <div className="corner top-right"></div>
        </div>
        <div className="column">
          <hr></hr>
        </div>
        <div className="column is-one-fifth corner-container">
          <div className="corner bottom-left"></div>
        </div>
      </div>

      <div className="columns job-content">
        <div className="column is-one-fifth first-column is-ball has-text-centered is-right full">
          <div className="circle">2018</div>
        </div>
        <div className="column has-text-right-desktop second-column">
          <div className="content">
            <Img
              className="image-logo ic24"
              fixed={images.ic24.childImageSharp.fixed}
              alt="Scoota"
            />
          </div>
          <div className="content">
            <h3 className="title is-4">Angular 2 Consultant at IC24</h3>
            <h4 className="subtitle is-6">July 2017 - December 2017</h4>
            <p className="is-4">
              Developed a Rostering System that enabled internal users to do
              shift allocations, workforce management, reporting and
              forecasting. Application built using Angular 4, Webpack, Electron,
              Redux (NGRX), CSS3, HTML5 and Bootstrap 4.
            </p>
          </div>
        </div>
        <div className="column is-one-fifth third-column is-ball has-text-centered is-right full">
          <div className="circle">2017</div>
        </div>
      </div>

      <div className="columns timeline">
        <div className="column is-one-fifth corner-container">
          <div className="corner bottom-right"></div>
        </div>
        <div className="column">
          <hr></hr>
        </div>
        <div className="column is-one-fifth corner-container">
          <div className="corner top-left"></div>
        </div>
      </div>

      <div className="columns job-content">
        <div className="column is-one-fifth first-column is-ball is-left full has-text-centered">
          <div className="circle">2014</div>
        </div>
        <div className="column has-text-left second-column">
          <div className="content">
            <Img
              className="image-logo"
              fixed={images.scoota.childImageSharp.fixed}
              alt="Scoota"
            />
          </div>
          <div className="content">
            <h3 className="title is-4">Full Stack Developer at Scoota</h3>
            <h4 className="subtitle is-6">October 2014 - June 2017</h4>
            <p className="is-4">
              Together with the product development team, I helped developing
              multiple web applications and services. Using technologies such as
              Angular 2, Angular JS, Webpack, NodeJS, Serverless, Python,
              Django, Postgres SQL, Redshift, MySQL, CSS3, HTML5 and Git.
            </p>
          </div>
        </div>
        <div className="column is-one-fifth third-column"></div>
      </div>

      <div className="columns timeline">
        <div className="column is-one-fifth corner-container">
          <div className="corner top-right"></div>
        </div>
        <div className="column">
          <hr></hr>
        </div>
        <div className="column is-one-fifth corner-container">
          <div className="corner bottom-left"></div>
        </div>
      </div>

      <div className="columns job-content">
        <div className="column is-one-fifth first-column is-ball has-text-centered is-right full">
          <div className="circle">2013</div>
        </div>
        <div className="column has-text-right-desktop second-column">
          <div className="content">
            <Img
              className="image-logo"
              fixed={images.truekkea.childImageSharp.fixed}
              alt="Truekkea"
            />
          </div>
          <div className="content">
            <h3 className="title is-4">
              Full Stack Web Developer, at Truekkea
            </h3>
            <h4 className="subtitle is-6">September 2013 - August 2015</h4>

            <p className="is-4">
              I collaborated on the creation of the startup Truekkea. I was
              responsible for the development of the web application using Ruby
              on Rails, Bootstrap, Slim and Compass.
            </p>
          </div>
        </div>
        <div className="column is-one-fifth third-column is-ball has-text-centered is-right full">
          <div className="circle">2013</div>
        </div>
      </div>

      <div className="columns timeline">
        <div className="column is-one-fifth corner-container">
          <div className="corner bottom-right"></div>
        </div>
        <div className="column">
          <hr></hr>
        </div>
        <div className="column is-one-fifth corner-container">
          <div className="corner top-left"></div>
        </div>
      </div>

      <div className="columns job-content">
        <div className="column is-one-fifth first-column is-ball has-text-centered top">
          <div className="circle">2012</div>
        </div>
        <div className="column has-text-left second-column">
          <div className="content">
            <Img
              className="image-logo"
              fixed={images.qad.childImageSharp.fixed}
              alt="QAD"
            />
          </div>
          <div className="content">
            <h3 className="title is-4">
              Software Engineer Associate at QAD Europe
            </h3>
            <h4 className="subtitle is-6">February 2012 - August 2014</h4>
            <p className="is-4">
              Being part of the Bank Drivers Team, we provided software
              solutions, that allowed the companies to send and receive
              electronic data with the banks and intragrate it to the ERP
              System. Language used PROGRESS 4GL.
            </p>
          </div>
        </div>
        <div className="column is-one-fifth third-column"></div>
      </div>
    </div>
  );
};

export default styled(Timeline)`
  .image-logo {
    display: inline-flex;
    width: 100%;
  }

  .ic24 {
    width: 100px;
  }

  .circle {
    font-weight: bold;
    padding: 25px 20px;
    border-radius: 50%;
    background-color: #cdf2e2;
    color: #4d4545;
    z-index: 2;
  }

  .job-content .first-column {
    padding: 0px;
  }

  .job-content .first-column.is-right.is-ball .circle {
    display: none;
  }

  .job-content .first-column.is-right.is-ball::after {
    display: none;
  }

  .job-content .is-ball {
    padding: 12px;
    display: inline-flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .job-content .is-ball::after {
    content: '';
    position: absolute;
    border-left: 3px solid #cdf2e2;
    z-index: 1;
  }

  .job-content .is-ball.bottom::after {
    height: 50%;
    left: 50%;
    top: 50%;
  }

  .job-content .is-ball.is-right.full::after {
    height: 100%;
    left: calc(50% - 3px);
  }

  .job-content .is-ball.is-left.full::after {
    height: 100%;
    left: 50%;
  }

  .job-content .is-ball.top::after {
    height: 50%;
    left: 50%;
    top: 0;
  }

  .timeline div {
    padding: 0;
    height: 40px;
    box-sizing: border-box;
  }

  .timeline hr {
    border-top: 3px solid #cdf2e2;
    margin: 0;
    top: 17px;
    position: relative;
  }

  .timeline .corner-container {
    display: flex;
    overflow: hidden;
  }

  .timeline .corner {
    border: 3px solid #cdf2e2;
    width: 100%;
    position: relative;
    border-radius: 15px;
  }

  .timeline .top-right {
    left: 50%;
    top: -50%;
  }

  .timeline .bottom-left {
    left: -50%;
    top: calc(50% - 3px);
  }

  .timeline .top-left {
    left: -50%;
    top: -50%;
  }

  .timeline .bottom-right {
    left: 50%;
    top: calc(50% - 3px);
  }

  @media (max-width: 481px) {
    .timeline {
      display: none;
    }

    .job-content .first-column.is-right.is-ball .circle {
      display: block;
    }

    .job-content .first-column.is-right.is-ball::after {
      display: block;
    }

    .job-content .second-column {
      border: 3px solid #cdf2e2;
      border-radius: 20px;
      padding: 20px;
    }

    .job-content .is-ball.top::after {
      height: 100%;
      left: calc(50% - 3px);
      top: 0;
    }

    .job-content .third-column {
      display: none;
    }
  }
`;
