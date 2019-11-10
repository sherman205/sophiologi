import React, { Component } from "react"
import styled from "styled-components"
import { media } from "../styles/media";

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
`;

const SymbolsIconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SymbolItem = styled.div`
  text-align: center;
  max-width: 100px;
`;

const SymbolItemHeading = styled.h4`

`;

const SymbolItemText = styled.p`
  font-size: 12px;
`;

const Linearicon = styled.span`
  &:before {
    font-size: 50px;
    justify-content: center;
  }
`;

const CodeLinearicon = styled(Linearicon)`
  &:before {
    content: "\\ec0c";
  }
`;

const EarthLinearicon = styled(Linearicon)`
  &:before {
    content: "\\eb84";
  }
`;

const Featured = () => {
  return (
    <FeaturedContainer>
      <FeaturedHeader>Featured Projects</FeaturedHeader>
      <SymbolsIconContainer>
        <SymbolItem>
          <CodeLinearicon className="linearicons-file-code"></CodeLinearicon>
          <SymbolItemHeading>Software</SymbolItemHeading>
          <SymbolItemText>Backend, frontend, design, small projects on the side, you name it</SymbolItemText>
        </SymbolItem>
        <SymbolItem>
          <EarthLinearicon className="linearicons-earth"></EarthLinearicon>
          <SymbolItemHeading>Language</SymbolItemHeading>
          <SymbolItemText>Linguistics of all kinds, some foreign language included woooo</SymbolItemText>
        </SymbolItem>
        <SymbolItem>
          <CodeLinearicon className="linearicons-file-code"></CodeLinearicon>
          <SymbolItemHeading>Software</SymbolItemHeading>
          <SymbolItemText>idk what's going in here yet, i'm open to ideas</SymbolItemText>
        </SymbolItem>
      </SymbolsIconContainer>
    </FeaturedContainer>
  );
};

  
export default Featured;