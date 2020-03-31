import React, { Component } from "react"
import { graphql } from 'gatsby'
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Experience from "../../components/experience"
import Projects from "../../components/projects"
import { theme } from "../../styles/theme";

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

const SoftwareMenuList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 5px;
  list-style: none;
`;

const SoftwareMenuItem = styled.li`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 80px;
  text-align: center;
  background: ${theme.colors.lightClay};
  &:hover,
  &:focus,
  &.active {
    opacity: 0.6;
  }
`;

class SoftwarePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'experience'
    };
  };

  selectMenuItem = (item) => {
    this.setState({
      active: item.toLowerCase()
    });
  }


  render() {
    const { data } = this.props;
    const { active } = this.state;
    const menuItems = ["Experience", "Skills", "Projects"];
    console.log(active);
    return (
      <Layout>
        <SEO title="Software Portfolio" />
        <SoftwareContainer>
          <SoftwareHeader>Software</SoftwareHeader>
          <SoftwareMenuList>
            {menuItems.map((item, i) => (
              <SoftwareMenuItem key={i} onClick={() => this.selectMenuItem(item)}>{item}</SoftwareMenuItem>
            ))}
          </SoftwareMenuList>
          {active == 'experience' && (
            <Experience data={data.experience.edges} type="software"/>
          )}
          {active == 'projects' && (
            <Projects data={data.featured.edges}/>
          )}
        </SoftwareContainer>
      </Layout>
    );
  }
};

export default SoftwarePage;

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
