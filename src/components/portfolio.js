import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { media } from "../styles/media"
import { theme } from "../styles/theme"
import CodeImg from "../images/code.jpg"
import LanguageImg from "../images/language.jpg"

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px 0 250px;
  height: calc(100vh - 502px);
  max-width: 1000px;
  ${media.tablet`height: 100vh;`};
  ${media.tablet`padding: 20px 0 50px;`};
`;

const PortfolioHeader = styled.h3`
  margin: 0;
  font-size: 30px;
  font-family: Source Code Pro;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const ImageRow = styled.div`
  display: flex;
  max-width: 650px;
  ${media.tablet`display: block;`};
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
`;

const Topic = styled.img`
  width: 100%;
  height: auto;
  opacity: 0.6;
  z-index: -2;
`;

const TopicText = styled.p`
  color: black;
  z-index: -1;
  position: absolute;
  margin: 0;
  padding: 10px;
  font-family: Source Code Pro;
  font-size: 20px;
  background-color: white;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <ImageContainer>
        <ImageRow>
          <Link to="/portfolio/software">
            <ImageColumn>
              <TopicText>Software</TopicText>
              <Topic src={CodeImg} />
            </ImageColumn>
          </Link>
        </ImageRow>
        <ImageRow>
          <ImageColumn>
            <TopicText>Language</TopicText>
            <Topic src={LanguageImg} />
          </ImageColumn>
          <ImageColumn>
            <TopicText>Misc</TopicText>
            <Topic src={LanguageImg} />
          </ImageColumn>
        </ImageRow>
      </ImageContainer>
    </PortfolioContainer>
  );
};

  
export default Portfolio;