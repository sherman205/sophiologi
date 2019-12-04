import React from "react"
import { graphql } from 'gatsby'
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Experience from "../../components/experience"
import Projects from "../../components/projects"

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 0 200px;
  max-width: 1000px;
`;

const LanguageHeader = styled.h3`
  margin: 0;
  font-size: 30px;
  font-family: Source Code Pro;
  text-align: center;
`;


const LanguagePage = ( {data} ) => (
  <Layout>
    <SEO title="Language Portfolio" />
    <LanguageContainer>
      <LanguageHeader>Language</LanguageHeader>
      <Experience data={data.experience.edges} type="language" />
      {/* <Projects data={data.featured.edges}/> */}
    </LanguageContainer>
  </Layout>
)

export default LanguagePage;

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
  }
`;