import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import GithubIcon from './icons/github'
import ExternalIcon from './icons/external'
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
  width: 800px;
  height: 500px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 10px 30px -15px ${theme.colors.lightClay};
  transition: all 0.25s ease;
  &:hover,
  &:focus {
    transform: translateX(10px);
  }
  ${media.desktop`width: 75%;`};
  ${media.tablet`display: block;`};
  ${media.tablet`width: 100%;`};
  ${media.tablet`align-items: center;`};
  ${media.phone`height: 450px;`};
  ${media.tiny`height: 420px;`};
`;

const ProjectInfo = styled.div`
  padding: 20px 40px;
  width: 700px;
  align-self: flex-start;
  ${media.tablet`width: 200px;`};
  ${media.tablet`padding-bottom: 0;`};
  ${media.tiny`padding: 10px 20px;`};
`;

const Title = styled.h3`
  font-size: 30px;
  ${media.tablet`font-size: 20px;`};
  ${media.thone`font-size: 15px;`};
`;

const Description = styled.div`
  font-family: Source Code Pro;
  ${media.desktop`font-size: 12px;`};
  ${media.tablet`font-size: 10px;`};
  ${media.phone`font-size: 8px;`};
`;

const Tech = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 120px));
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
  border-radius: 5px;
  background: ${theme.colors.lightClay};
  ${media.desktop`font-size: 12px;`};
  ${media.desktop`width: 50px;`};
  ${media.tablet`font-size: 10px;`};
  ${media.tablet`padding: 2px;`};
  ${media.tablet`margin: 2px;`};
`;

const RightPane = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 100%;
  ${media.tablet`width: 100%;`};
`;

const ProjectPreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  ${media.tablet`height: 180px;`};
  ${media.tablet`justify-content: flex-start;`};
`;

const Screenshot = styled(Img)`
  opacity: 0.6;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  ${media.tablet`justify-content: flex-start;`};
  ${media.tablet`padding-left: 30px;`};
  ${media.tiny`padding: 0;`};
`;

const ProjectLinkItem = styled.a`
  padding: 10px;
  border-radius: 5px;
  color: black;
  svg {
    width: 20px;
    height: 20px;
  }
  &:hover,
  &:focus {
    svg {
      fill: ${theme.colors.pinkBrown};
    }
  }
  ${media.tiny`padding: 5px;`};
  ${media.tiny`
    svg {
      width: 15px;
      height: 15px;
    }`
  };
`;

const Featured = ( {data} ) => {
  const featuredProjects = data.filter(({ node }) => node.frontmatter.featured === 'true');
  return (
    <FeaturedContainer>
      <FeaturedHeader>Featured Projects</FeaturedHeader>
      <FeaturedProjectsContainer>
        {featuredProjects && featuredProjects.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { title, tech, preview, github, live } = frontmatter;
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
              <RightPane>
                <ProjectLinks>
                  {github && (
                    <ProjectLinkItem
                      href={github}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="github link">
                      <GithubIcon />
                    </ProjectLinkItem>
                  )}         
                  {live && (
                    <ProjectLinkItem
                      href={live}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="external link">
                        <ExternalIcon />
                    </ProjectLinkItem>
                  )}
                </ProjectLinks>
                <ProjectPreview>
                  <Screenshot fluid={preview.childImageSharp.fluid} />
                </ProjectPreview>
              </RightPane>
            </Project>
          );
        })}
      </FeaturedProjectsContainer>
    </FeaturedContainer>
  );
};

  
export default Featured;