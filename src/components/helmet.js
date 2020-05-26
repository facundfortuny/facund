import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default () => (
  <StaticQuery
    query={graphql`
      query helmetQuery {
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
    `}
    render={data => (
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={data.site.siteMetadata.title}
      >
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta
          name="image"
          content={`${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.siteImage}`}
        />
        {/* facebook cards */}
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta
          property="og:image"
          content={`${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.siteImage}`}
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        {/* twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={data.site.siteMetadata.twitterUsername}
        />
        <meta name="twitter:title" content={data.site.siteMetadata.title} />
        <meta
          name="twitter:description"
          content={data.site.siteMetadata.description}
        />
        <meta
          name="twitter:image"
          content={`${data.site.siteMetadata.siteUrl}${data.site.siteMetadata.siteImage}`}
        />
      </Helmet>
    )}
  />
);
