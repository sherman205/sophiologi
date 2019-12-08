import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Footer from "./footer"
import Sophiologi from "./sophiologi"
import Social from "./social"
import Nav from "./nav"

const Layout = ({ children }) => {

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
  children: PropTypes.node.isRequired
}

export default Layout
