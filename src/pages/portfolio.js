import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const PortfolioPage = ( {data} ) => (
  <Layout>
    <SEO title="Portfolio" />
    <Portfolio />
  </Layout>
)

export default PortfolioPage;
