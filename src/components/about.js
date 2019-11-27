import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { media } from "../styles/media";
import { theme } from "../styles/theme";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 0 200px;
  height: calc(100vh - 502px);
  max-width: 1000px;
`;

const AboutHeader = styled.h3`
  margin: 0;
  font-size: 30px;
  font-family: Source Code Pro;
  text-align: center;
`;

const AboutContent = styled.div`
  display: flex;
`;

const Image = styled(Img)`
  opacity: 0.6;
  width: 50%;
`;

const AboutText = styled.div`
  padding: 50px;
  width: 75%;
  font-size: 15px;
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, image } = frontmatter;
  return (
    <AboutContainer>
      <AboutHeader>{title}</AboutHeader>
      <AboutContent>
        <Image fluid={image.childImageSharp.fluid} />
        <AboutText dangerouslySetInnerHTML={{ __html: html }} />
      </AboutContent>
    </AboutContainer>
  );
};

  
export default About;