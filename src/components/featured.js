import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { media } from "../styles/media";
import { theme } from "../styles/theme";

const FeaturedContainer = styled.div`
  margin: 0 auto;
  padding: 80px 0 200px;
  max-width: 1000px;
`;

const FeaturedHeader = styled.h3`
  font-size: 30px;
  font-family: Source Code Pro;
  text-align: center;
  padding: 20px;
  ${media.tablet`font-size: 20px;`};
`;

const FeaturedProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  height: 500px;
  margin: 10px;
  padding: 10px;
  ${media.tablet`display: block;`};
  ${media.tablet`align-items: center;`};
`;

const ProjectInfo = styled.div`
  padding: 20px 40px;
  width: 700px;
  align-self: flex-start;
  ${media.tablet`width: 200px;`};
`;

const Title = styled.h3`
  font-size: 40px;
  ${media.tablet`font-size: 15px;`};
`;

const Description = styled.div`
  font-family: Source Code Pro;
  ${media.tablet`font-size: 10px;`};
`;

const Tech = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  list-style: none;
  padding: 5px;
  ${media.tablet`padding: 0;`};
  ${media.tablet`grid-template-columns: repeat(2, minmax(20px, 80px));`};
`;

const TechItem = styled.li`
  margin: 10px;
  padding: 10px;
  width: 70px;
  text-align: center;
  background: ${theme.colors.lightClay};
  ${media.tablet`font-size: 10px;`};
  ${media.tablet`width: 50px;`};
  ${media.tablet`padding: 2px;`};
  ${media.tablet`margin: 2px;`};
`;

const ProjectPreview = styled.div`
  width: 1000px;
  ${media.tablet`width: 100%;`};
`;

const Screenshot = styled(Img)`
  opacity: 0.6;
`;

const Featured = ( {data} ) => {
  console.log(data);
  return (
    <FeaturedContainer>
      <FeaturedHeader>Featured Projects</FeaturedHeader>
      <FeaturedProjectsContainer>
        {data.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { title, tech, preview } = frontmatter;
          return (
            <Project key={i}>
              <ProjectInfo>
                <Title>{title}</Title>
                <Description dangerouslySetInnerHTML={{ __html: html }} />
                {tech && (
                  <Tech>
                    {tech.map((tech, i) => (
                      <TechItem key={i}>{tech}</TechItem>
                    ))}
                  </Tech>
                )}
              </ProjectInfo>
              <ProjectPreview>
                <Screenshot fluid={preview.childImageSharp.fluid} />
              </ProjectPreview>
            </Project>
          );
        })}
      </FeaturedProjectsContainer>
    </FeaturedContainer>
  );
};

  
export default Featured;