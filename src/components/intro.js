import React, { Component } from "react"
import styled from "styled-components"
import { media } from "../styles/media";
import { theme } from "../styles/theme";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 80px 0 200px;
  max-width: 1000px;
`;

const IntroTopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.tablet`display: block;`};
`;

const IntroTextContainer = styled.div`
  padding: 10px;
  max-width: 500px;
`;

const IntroText = styled.h1`
  font-size: 60px;
`;

const IntroNounsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroNounsList = styled.ul`
  list-style: none;
`;

const IntroNounItem = styled.li`
  text-transform: uppercase;
  font-size: 20px;
`;

const IntroQuoteContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  background: ${theme.colors.lightClay};
  margin-left: 50px;
`;

const IntroQuoteText = styled.div`
  font-family: Source Code Pro;
  padding: 10px;
  text-align: center;
`;

const IntroQuoteAuthor = styled.div`
  font-size: 12px;
  text-align: right;
  padding: 10px;
`;

const Intro = ({ data }) => {
  const { frontmatter } = data[0].node;
  return (
    <IntroContainer>
      <IntroTopSection>
        <IntroTextContainer>
          <IntroText>
            {frontmatter.title}{frontmatter.name}
          </IntroText>
        </IntroTextContainer>
        <IntroQuoteContainer>
          <IntroQuoteText>
            "No matter what people tell you, words and ideas can change the world."
            <IntroQuoteAuthor>- Robin Williams</IntroQuoteAuthor>
          </IntroQuoteText>
        </IntroQuoteContainer>
      </IntroTopSection>
      <IntroNounsContainer>
        <IntroNounsList>
        <IntroNounItem>Fullstack Developer</IntroNounItem>
        <IntroNounItem>Linguist</IntroNounItem>
        <IntroNounItem>World Traveler</IntroNounItem>
        <IntroNounItem>Cat Lover</IntroNounItem>
        </IntroNounsList>
      </IntroNounsContainer>
    </IntroContainer>
  );
};

  
export default Intro;