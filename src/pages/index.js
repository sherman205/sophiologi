import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Symbols from "../components/symbols"
import Featured from "../components/featured"

const Index = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Intro data={data.intro.edges}/>
    <Symbols />
    <Featured />
  </Layout>
)

export default Index;

export const query = graphql`
  {
    intro: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/intro/" } }) {
      edges {
        node {
          frontmatter {
            title
            name
            quote
            quoteAuthor
            nouns
          }
        }
      }
    }
  }
`;
