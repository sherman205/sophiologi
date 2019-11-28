import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = ( {data} ) => (
  <Layout>
    <SEO title="Portfolio" />
    {/* <About data={data.about.edges}/> */}
  </Layout>
)

export default PortfolioPage;
