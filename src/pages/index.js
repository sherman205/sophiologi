import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Symbols from "../components/symbols"

const Index= () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Symbols />
  </Layout>
)

export default Index;
