import React, { Component } from "react"
import styled from "styled-components"
import { media } from "../styles/media";

const SymbolsContainer = styled.div`
  margin: 0 auto;
  padding: 80px 0 200px;
  max-width: 1000px;
`;

const SymbolsHeader = styled.h3`
  font-size: 30px;
  font-family: Source Code Pro;
  text-align: center;
  padding: 10px;
`;

const SymbolsIconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SymbolItem = styled.div`

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
        <SymbolItem>
          <CodeLinearicon className="linearicons-file-code"></CodeLinearicon>
        </SymbolItem>
        <SymbolItem>
          <EarthLinearicon className="linearicons-earth"></EarthLinearicon>
        </SymbolItem>
        <SymbolItem>
          <CodeLinearicon className="linearicons-file-code"></CodeLinearicon>
        </SymbolItem>
      </SymbolsIconContainer>
    </SymbolsContainer>
  );
};

  
export default Symbols;