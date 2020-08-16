import React, { Component } from "react"
import styled from "styled-components"
import Software from "./software"
import Language from "./language"
import { media } from "../styles/media"
import { theme } from "../styles/theme"

const PortfolioContainer = styled.div`
  margin: 0 auto;
  padding: 10px 0 200px;
  max-width: 1000px;
  ${media.tablet`padding: 20px 0 50px;`};
`;

const PortfolioHeader = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 30px;
  font-family: Source Code Pro;
  ${media.tablet`font-size: 20px;`};
`;

const PortfolioIconContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  ${media.tablet`display: block;`};
`;

const PortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 100px;
  height: 30px;
  padding: 2rem 2rem;
  margin: 10px;
  cursor: default;
  border-radius: 5px;
  transition: all 0.25s ease;
  background-color: ${props => (props.selected ? `${theme.colors.lightClay}` : '')};
  border: ${props => (props.selected ? '1px solid black' : '')};
  &:hover,
  &:focus {
    background-color: ${theme.colors.lightClay};
    border: 1px solid black;
  }
  ${media.tablet`margin: 40px auto;`};
`;

const PortfolioHeading = styled.p`
  font-family: Source Code Pro;
  font-size: 12px;
`;

const Linearicon = styled.span`
  display: flex;
  justify-content: center;
  &:before {
    font-size: 25px;
  }
`;

const CodeLinearicon = styled(Linearicon)`
  &:before {
    content: "\\ec0b";
  }
`;

const EarthLinearicon = styled(Linearicon)`
  &:before {
    content: "\\eb84";
  }
`;

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioType: 'software'
    };
  };

  selectPortfolioType = (item) => {
    this.setState({
      portfolioType: item.toLowerCase()
    });
  }

  render() {
    const { data } = this.props;
    const { portfolioType } = this.state;
    return (
      <PortfolioContainer>
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <PortfolioIconContainer>
          <PortfolioItem active={portfolioType} selected={portfolioType === 'software' ? true : ''} onClick={() => this.selectPortfolioType('software')}>
            <CodeLinearicon className="linearicons-code"></CodeLinearicon>
            <PortfolioHeading>Software</PortfolioHeading>
          </PortfolioItem>
          <PortfolioItem active={portfolioType} selected={portfolioType === 'language' ? true : ''} onClick={() => this.selectPortfolioType('language')}>
            <EarthLinearicon className="linearicons-earth"></EarthLinearicon>
            <PortfolioHeading>Language</PortfolioHeading>
          </PortfolioItem>
        </PortfolioIconContainer>
        {portfolioType === 'software' && (
          <Software data={data} />
        )}
        {portfolioType === 'language' && (
          <Language data={data} />
        )}
      </PortfolioContainer>
    );
  }
};

  
export default Portfolio;