import React from "react"
import GithubIcon from './icons/github'
import ExternalIcon from './icons/external'
import styled from "styled-components"
import { media } from "../styles/media";
import { theme } from "../styles/theme";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  max-width: 1000px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  ${media.tablet`grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));`};
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 2rem 1.75rem;
  border-radius: 5px;
  box-shadow: 0 10px 30px -15px ${theme.colors.lightClay};
  transition: all 0.25s ease;
  &:hover,
  &:focus {
    transform: translateY(5px);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProjectLinkItem = styled.a`
  color: black;
  padding: 5px;
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
`;

const Title = styled.h3`
  font-size: 20px;
  ${media.tablet`font-size: 15px;`};
`;

const Description = styled.div`
  font-size: 15px;
`;

const Tech = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const TechItem = styled.li`
  font-size: 14px;
  font-family: Source Code Pro;
  padding-right: 10px;
  padding-bottom: 10px;
`;

const Projects = ( {data} ) => {
  return (
    <ProjectsContainer>
      <ProjectsGrid>
        {data.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { title, tech, github, live } = frontmatter;
          return (
            <ProjectCard key={i}>
              <header>
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
                <Title>{title}</Title>
                <Description dangerouslySetInnerHTML={{ __html: html }} />
              </header>
              <footer>
                {tech && (
                  <Tech>
                    {tech.map((tech, i) => (
                      <TechItem key={i}>{tech}</TechItem>
                    ))}
                  </Tech>
                )}
              </footer>
            </ProjectCard>
          );
        })}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

  
export default Projects;