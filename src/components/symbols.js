import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { media } from "../styles/media";

const SymbolsContainer = styled.div`
  margin: 0 auto;
  padding: 80px 0 200px;
  max-width: 1000px;
  ${media.tablet`padding: 20px 0 50px;`};
`;

const SymbolsHeader = styled.h3`
  font-size: 30px;
  font-family: Source Code Pro;
  text-align: center;
  padding: 20px;
  ${media.tablet`font-size: 20px;`};
`;

const SymbolsIconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${media.tablet`display: block;`};
`;

const SymbolItem = styled.div`
  text-align: center;
  max-width: 100px;
  ${media.tablet`margin: 40px auto;`};
`;

const SymbolItemLink = styled(Link)`
  text-decoration: none;
  color: black;
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

const Symbols = () => {
  return (
    <SymbolsContainer>
      <SymbolsHeader>Things I do</SymbolsHeader>
      <SymbolsIconContainer>
        <SymbolItemLink to="/portfolio/software">
          <SymbolItem>
            <CodeLinearicon className="linearicons-file-code"></CodeLinearicon>
            <SymbolItemHeading>Software</SymbolItemHeading>
            <SymbolItemText>Backend, frontend, design, small projects on the side</SymbolItemText>
          </SymbolItem>
        </SymbolItemLink>
        <SymbolItemLink to="/portfolio/language">
          <SymbolItem>
            <EarthLinearicon className="linearicons-earth"></EarthLinearicon>
            <SymbolItemHeading>Language</SymbolItemHeading>
            <SymbolItemText>Language research papers and other linguistics projects</SymbolItemText>
          </SymbolItem>
        </SymbolItemLink>
      </SymbolsIconContainer>
    </SymbolsContainer>
  );
};

  
export default Symbols;