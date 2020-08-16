import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const PortfolioPage = ( {data} ) => (
  <Layout>
    <SEO title="Portfolio" />
    <Portfolio data={data}/>
  </Layout>
)

export default PortfolioPage;

export const query = graphql`
  {
    experience: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/" } }
      sort: { fields: [frontmatter___order], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            location
            position
            date
            type
            description
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
            tech
            github
            live
          }
        }
      }
    }
    skills: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/skills/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
          }
        }
      }
    }
  }
`;
