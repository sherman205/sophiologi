import React from "react"
import styled from "styled-components"
import { media } from "../styles/media";
import { theme } from "../styles/theme";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  max-width: 1000px;
  margin: 0 50px;
  ${media.thone`margin: 0;`};
`;

const SkillsSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 0;
  &:before {
    content: " ";
    border-bottom: 1px solid red;
    width: 100%;
  }
  ${media.tablet`font-size: 15px;`};
`;

const Tech = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 20px;
`;

const TechItem = styled.li`
  font-size: 14px;
  font-family: Source Code Pro;
  padding-right: 10px;
  padding-bottom: 10px;
  &:before {
      content: "• ";
      color: ${theme.colors.pinkBrown};;
  }
  &:nth-child(1):before {
    display: none;
  }
`;

const Skills = ( {data} ) => {
  return (
    <SkillsContainer>
      {data.map(({ node }, i) => {
          const { frontmatter } = node;
          const { title, tech } = frontmatter;
          return (
            <SkillsSection key={i}>
              <Title>{title}</Title>
              {tech && (
                <Tech>
                  {tech.map((tech, i) => (
                    <TechItem key={i}>{tech}</TechItem>
                  ))}
                </Tech>
              )}
            </SkillsSection>
          );
      })}
    </SkillsContainer>
  );
};

  
export default Skills;