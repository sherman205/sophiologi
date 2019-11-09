import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"

const Index= () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
  </Layout>
)

export default Index;
