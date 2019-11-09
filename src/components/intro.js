import React, { Component } from "react"
import styled from "styled-components"

const IntroContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 80px 0;
  max-width: 1000px;
`;

const IntroTextContainer = styled.div`
  padding: 10px;
  width: 60%;
  max-width: 480px;
`;

const IntroText = styled.h1`

`;

const IntroNounsContainer = styled.ul`
  list-style: none;
`;

const IntroNounItem = styled.li`

`;

const IntroQuoteContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  max-width: 300px;
  background: rgb(151, 75, 41 , 0.3);
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

const Intro = () => {
  
    return (
      <IntroContainer>
        <IntroTextContainer>
          <IntroText>
            Hello, I'm Sophia
          </IntroText>
          <IntroNounsContainer>
            <IntroNounItem>Fullstack Developer</IntroNounItem>
            <IntroNounItem>Linguist</IntroNounItem>
            <IntroNounItem>World Traveler</IntroNounItem>
            <IntroNounItem>Cat Lover</IntroNounItem>
          </IntroNounsContainer>
        </IntroTextContainer>
        <IntroQuoteContainer>
          <IntroQuoteText>
            "No matter what people tell you, words and ideas can change the world."
            <IntroQuoteAuthor>- Robin Williams</IntroQuoteAuthor>
          </IntroQuoteText>
        </IntroQuoteContainer>
      </IntroContainer>
    );
};

  
export default Intro;