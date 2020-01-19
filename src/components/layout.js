/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      style={{
        textAlign: `center`,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: "auto",
          }}
        >
          <p>
            Built by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitter.com/cianmm"
            >
              Cian Mac Mahon
            </a>{" "}
            with
            {` `}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org"
            >
              Gatsby
            </a>
            {` `}
            because I wanted to give it a shot. Contribute on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/cianmm/is-it-election-time"
            >
              GitHub
            </a>
            .
          </p>
          <p>
            <small>
              I know this is overkill and I don't care. I take no responsibility
              for any of this being wrong, I put it together instead of going to
              the gym.
            </small>
          </p>
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
