import React from 'react';
import styled from 'styled-components';

const Header = ({ className }) => (
  <div className={className}>
    <section className="hero is-fullheight landing-page">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            <span className="label-style-light">Facund Fortuny</span>
          </h1>
          <h2 className="subtitle">
            <span className="label-style-light">Frontend Developer</span>
          </h2>
        </div>
      </div>
    </section>
  </div>
);

export default styled(Header)`
  .label-style-light {
    background-color: #cdf2e2;
    color: black;
    padding: 0 10px;
  }

  .title {
    color: white;
    font-size: 5rem;
  }

  .subtitle {
    color: white;
    font-size: 3rem;
  }

  @media (max-width: 481px) {
    .title {
      font-size: 2rem;
    }
    .subtitle {
      font-size: 1rem;
    }
  }
`;
