/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
            <a
              target="_blank"
              href="https://github.com/cianmm/is-it-election-time"
            >
              Built
            </a>{" "}
            by{" "}
            <a target="_blank" href="https://www.twitter.com/cianmm">
              Cian Mac Mahon
            </a>{" "}
            with
            {` `}
            <a target="_blank" href="https://www.gatsbyjs.org">
              Gatsby
            </a>
            {` `}
            because I wanted to give it a shot
          </p>
          <p>
            <small>I know it's overkill and I don't care</small>
          </p>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
