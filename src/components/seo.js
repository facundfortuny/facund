import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// import { siteImage } from '../images/facundfortuny.png';
const getSiteMetadata = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        siteImage
        description
        keywords
        twitterName
      }
    }
  }
`;

const SEO = () => {
  const data = useStaticQuery(getSiteMetadata);
  const {
    title,
    description,
    keywords,
    siteUrl,
    twitterName,
  } = data.site.siteMetadata;


  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="canonical" href={siteUrl} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitterName} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
