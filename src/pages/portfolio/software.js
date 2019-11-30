import React from "react"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Portfolio from "../../components/portfolio"

const SoftwarePage = ( {data} ) => (
  <Layout>
    <SEO title="Software Portfolio" />
  </Layout>
)

export default SoftwarePage;
