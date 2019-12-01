import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import Footer from "./footer"
import Sophiologi from "./sophiologi"
import Social from "./social"
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
    <>
      <Nav />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1500,
          paddingTop: 0,
          padding: 50
        }}
      >
        <main>{children}</main>
      </div>
      <Sophiologi />
      <Social />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
