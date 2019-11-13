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
    <Featured data={data.featured.edges}/>
  </Layout>
)

export default Index;

export const query = graphql`
  {
    intro: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/intro/" } }
    ) {
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
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            preview {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tech
          }
        }
      }
    }
  }
`;
