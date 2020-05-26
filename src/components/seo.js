import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const getSiteMetadata = graphql`
  query {
    metaData: site {
      siteMetadata {
        title
        siteUrl
        description
        keywords
        twitterName
      }
    }
    metaImage: file(relativePath: { eq: "facundfortuny.png" }) {
      childImageSharp {
        fixed(width: 400, height: 300) {
          src
        }
      }
    }
  }
`;

const SEO = () => {
  const { metaData, metaImage } = useStaticQuery(getSiteMetadata);
  const {
    title,
    description,
    keywords,
    siteUrl,
    twitterName,
  } = metaData.siteMetadata;
  const image =
    metaImage && metaImage.childImageSharp.fixed.src
      ? `${siteUrl}${metaImage.childImageSharp.fixed.src}`
      : null;

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
      <meta name="image" content={image} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterName} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
