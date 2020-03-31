import React, { Component } from "react"
import styled from "styled-components"
import { media } from "../styles/media";
import { theme } from "../styles/theme";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  max-width: 1000px;
`;

const Skills = ( {data} ) => {
  return (
    <SkillsContainer>
      <p>Content coming soon!</p>
    </SkillsContainer>
  );
};

  
export default Skills;