import React from 'react';

import '../css/style.scss';

import Helmet from './helmet';
import Background from './background';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Helmet />
    <Background>
      <Header />
    </Background>
    {children}
    <Footer />
  </>
);

export default Layout;
