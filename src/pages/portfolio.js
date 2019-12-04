import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/portfolio"

const PortfolioPage = ( {data} ) => (
  <Layout>
    <SEO title="Portfolio" />
    <Portfolio data={data.portfolio.edges}/>
  </Layout>
)

export default PortfolioPage;

export const query = graphql`
  {
    portfolio: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/portfolio/" } }
      sort: { fields: [frontmatter___order], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            quote
            quoteAuthor
            image {
              childImageSharp {
                fluid(maxWidth: 700, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
