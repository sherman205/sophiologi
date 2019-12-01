import React from "react"
import { graphql } from 'gatsby'
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Experience from "../../components/experience"

const SoftwareContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 0 200px;
  max-width: 1000px;
`;

const SoftwareHeader = styled.h3`
  margin: 0;
  font-size: 30px;
  font-family: Source Code Pro;
  text-align: center;
`;


const SoftwarePage = ( {data} ) => (
  <Layout>
    <SEO title="Software Portfolio" />
    <SoftwareContainer>
      <SoftwareHeader>Software</SoftwareHeader>
      <Experience data={data.experience.edges} />
    </SoftwareContainer>
  </Layout>
)

export default SoftwarePage;

export const query = graphql`
  {
    experience: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            location
            position
            date
            description
          }
        }
      }
    }
  }
`;
