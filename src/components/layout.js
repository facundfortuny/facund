import React from 'react';

import '../css/style.scss';

import SEO from './seo';
import Background from './background';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <SEO />
    <Background>
      <Header />
    </Background>
    {children}
    <Footer />
  </>
);

export default Layout;
