import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { media } from "../styles/media"
import { theme } from "../styles/theme"

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px 0 250px;
  max-width: 1000px;
  ${media.tablet`padding: 20px 0 50px;`};
`;

const IntroTextContainer = styled.div`
  max-width: 500px;
  letter-spacing: 5px;
  cursor: default;
`;

const IntroText = styled.div`
  display: flex;
  align-items: baseline;
  ${media.tablet`align-items: center;`};
`;

const IntroTextTitle = styled.h3`
  font-size: 30px;
  padding-right: 10px;
  ${media.tablet`font-size: 25px;`};
  ${media.tiny`font-size: 20px;`};
`;

const IntroTextName = styled.h1`
  font-size: 80px;
  color: ${theme.colors.clay};
  transition: all 0.5s ease;
  &:hover {
    transition: all 0.25s ease;
    color: ${theme.colors.pinkBrown};
    letter-spacing: 2px;
  }
  ${media.tablet`font-size: 50px;`};
`;

const IntroInfo = styled.div`
  display: flex;
`;

const IntroNounsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroNounsList = styled.ul`
  list-style: none;
  padding: 0;
  ${media.tablet`padding-right: 10px;`};
`;

const IntroNounItem = styled.li`
  text-transform: uppercase;
  font-size: 20px;
  cursor: default;
  transition: all 0.5s ease;
  &:hover {
    transition: all 0.25s ease;
    color: ${theme.colors.clay};
    letter-spacing: 2px;
  }
`;

const AboutButton = styled(Link)`
  margin: 30px 30px 0;
  color: ${theme.colors.clay};
  text-decoration: none;
  border: 1px solid ${theme.colors.clay};
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  font-family: Source Code Pro;
  transition: 0.5s;
  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${theme.colors.black};
    color: ${theme.colors.black};
  }
  ${media.tablet`padding: 15px;`};
  ${media.phablet`font-size: 12px;`};
  ${media.thone`margin: 0 30px 0 0;`};
`;

const IntroQuoteContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  max-width: 300px;
  background: ${theme.colors.lightClay};
  margin-left: 50px;
  transition: opacity 0.3s linear;
  &:hover {
    opacity: 0.6;
  }
  ${media.tablet`max-width: 200px;`};
  ${media.tablet`margin-left: auto;`};
  ${media.tablet`margin-right: auto;`};
`;

const IntroQuoteText = styled.div`
  font-family: Source Code Pro;
  padding: 10px;
  text-align: center;
  ${media.tablet`font-size: 15px;`};
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
      <IntroTextContainer>
        <IntroText>
          <IntroTextTitle>{frontmatter.title}</IntroTextTitle>
          <IntroTextName>{frontmatter.name}</IntroTextName>
        </IntroText>
      </IntroTextContainer>
      <IntroInfo>
        <IntroNounsContainer>
          <IntroNounsList>
            {frontmatter.nouns && frontmatter.nouns.map((noun, i) => <IntroNounItem key={i}>{noun}</IntroNounItem>)}
          </IntroNounsList>
          <AboutButton to="/about">More about me</AboutButton>
        </IntroNounsContainer>
        <IntroQuoteContainer>
          <IntroQuoteText>
            "{frontmatter.quote}"
            <IntroQuoteAuthor>- {frontmatter.quoteAuthor}</IntroQuoteAuthor>
          </IntroQuoteText>
        </IntroQuoteContainer>
      </IntroInfo>
    </IntroContainer>
  );
};

  
export default Intro;