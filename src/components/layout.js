import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
const Layout = ({ children, darkText }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          defaultTitle={data.site.siteMetadata.title}
          >
          <meta name="description" content="Personal website of Lorenzo Adinolfi Software Engineer and Full Stack Developer" />
          <html lang="en" />
        </Helmet>
        <div id="wrapper" className={darkText ? 'dark-text' : ''}>
          {children}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  darkText: PropTypes.bool,
};

export default Layout;
