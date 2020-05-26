import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import BackgroundImage from 'gatsby-background-image';

const getBackground = graphql`
  query {
    desktop: file(relativePath: { eq: "facundMountain.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Background = ({ className, children }) => {
  const { desktop } = useStaticQuery(getBackground);
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={desktop.childImageSharp.fluid}
      backgroundColor={`#151515`}
    >
      {children}
    </BackgroundImage>
  );
};

export default styled(Background)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;
