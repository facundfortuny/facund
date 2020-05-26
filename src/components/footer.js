import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const getSocial = graphql`
  query {
    site {
      siteMetadata {
        twitter
        github
        linkedin
      }
    }
  }
`;

const Footer = ({ className }) => {
  const site = useStaticQuery(getSocial);
  return (
    <footer className={className + ' footer center'}>
      <div className="container">
        <div className="content has-text-centered is-white">
          <h3 className="title is-5">Want to know more?</h3>
        </div>
        <div className="content has-text-centered is-white">
          <p className="social-buttons">
            <a
              className="is-size-1"
              href={site.site.siteMetadata.twitter}
              title="Twitter Backcoder"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              className="is-size-1"
              href={site.site.siteMetadata.github}
              title="Github Facund Fortuny"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              className="is-size-1"
              href={site.site.siteMetadata.linkedin}
              title="LinkedIn Facund Fortuny"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </p>
        </div>
        <div className="content has-text-centered is-white">
          <p>
            <small>
              Copyright {new Date().getFullYear()} &copy; Facund Fortuny. All
              rights reserved.
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default styled(Footer)`
  .footer {
    display: flex;
    padding: 1.5rem 1.5rem;
    line-height: 1.5rem;
    background-color: $primary-color;
    a {
      color: black;
      padding: 15px;
    }
    a:hover {
      color: $secondary-color;
    }
  }
`;
