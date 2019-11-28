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
  ${media.tablet`padding: 20px 0 50px;`};
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

const IntroText = styled.div`
  display: flex;
  align-items: baseline;
`;

const IntroTextTitle = styled.h3`
  font-size: 30px;
  padding: 10px;
`;

const IntroTextName = styled.h1`
  font-size: 60px;
  color: ${theme.colors.clay};
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
            <IntroTextTitle>{frontmatter.title}</IntroTextTitle>
            <IntroTextName>{frontmatter.name}</IntroTextName>
          </IntroText>
        </IntroTextContainer>
        <IntroQuoteContainer>
          <IntroQuoteText>
            "{frontmatter.quote}"
            <IntroQuoteAuthor>- {frontmatter.quoteAuthor}</IntroQuoteAuthor>
          </IntroQuoteText>
        </IntroQuoteContainer>
      </IntroTopSection>
      <IntroNounsContainer>
        <IntroNounsList>
          {frontmatter.nouns && frontmatter.nouns.map((noun, i) => <IntroNounItem key={i}>{noun}</IntroNounItem>)}
        </IntroNounsList>
      </IntroNounsContainer>
    </IntroContainer>
  );
};

  
export default Intro;