import React from "react"
import styled from "styled-components"
import Experience from "./experience"
import Projects from "./projects"

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


const Language = ( {data} ) => (
    <LanguageContainer>
        <LanguageHeader>Language</LanguageHeader>
        <Experience data={data.experience.edges} type="language" />
        {/* <Projects data={data.featured.edges}/> */}
    </LanguageContainer>
)

export default Language;
