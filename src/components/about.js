import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { media } from "../styles/media";
import { theme } from "../styles/theme";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px 0 200px;
  max-width: 1000px;
`;

const AboutHeader = styled.h3`
  margin: 0;
  font-size: 30px;
  font-family: Source Code Pro;
  text-align: center;
`;

const AboutCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  ${media.desktop`display: block;`};
  ${media.desktop`margin-left: auto;`};
  ${media.desktop`margin-right: auto;`};
  ${media.tablet`padding: 10px;`};
`;

const QuoteContainer = styled.div`
  display: flex;
  visibility: hidden;
  opacity: 0;
  align-items: center;
  border-radius: 5px;
  position: absolute;
  background-color: white;
  width: 300px;
  height: 300px;
  transition:visibility 0.3s linear,opacity 0.3s linear;
  ${media.tablet`max-width: 200px;`};
  ${media.tablet`margin-left: auto;`};
  ${media.tablet`margin-right: auto;`};
`;

const Quote = styled.div`
  font-family: Source Code Pro;
  font-size: 12px;
  padding: 10px;
  text-align: center;
`;

const QuoteAuthor = styled.div`
  font-size: 12px;
  text-align: right;
  padding: 10px;
`;

const ImageWrapper = styled.div`
  height: 300px;
  width: 300px;
  &:hover ${QuoteContainer} {
    visibility: visible;
    opacity: 1;
  }
  ${media.desktop`margin-left: auto;`};
  ${media.desktop`margin-right: auto;`};
`;

const Image = styled(Img)`
  opacity: 0.6;
  border-radius: 5px;
  z-index: -2;
  width: 100%;
`;

const QuickInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  ${media.desktop`padding: 30px 100px;`};
`;

const QuickInfoItem = styled.div`
  display: flex;
  align-items: center;
`;

const QuickText = styled.p`
  font-size: 15px;
  font-family: Source Code Pro
  color: ${theme.colors.pinkBrown};
`;

const Linearicon = styled.span`
  &:before {
    font-size: 30px;
  }
`;

const PushPinLinearicon = styled(Linearicon)`
  &:before {
    content: "\\ea79";
    padding: 20px;
  }
`;

const GradLinearicon = styled(Linearicon)`
  &:before {
    content: "\\e9da";
    padding: 20px;
  }
`;

const TextLinearicon = styled(Linearicon)`
  &:before {
    content: "\\eca2";
    padding: 20px;
  }
`;

const AboutText = styled.div`
  padding: 0 100px;
  font-size: 15px;
  line-height: 20px;
  column-width: 14em;
  column-gap: 2em;
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, image, location, education, languages, quote, quoteAuthor } = frontmatter;
  return (
    <AboutContainer>
      <AboutHeader>{title}</AboutHeader>
      <AboutCard>
        <ImageWrapper>
          <QuoteContainer>
            <Quote>
              "{quote}"
              <QuoteAuthor>- {quoteAuthor}</QuoteAuthor>
            </Quote>
          </QuoteContainer>
          <Image fluid={image.childImageSharp.fluid} />
        </ImageWrapper>
        <QuickInfo>
          <QuickInfoItem>
            <PushPinLinearicon className="linearicons-pushpin2"></PushPinLinearicon>
            <QuickText>{location}</QuickText>
          </QuickInfoItem>
          <QuickInfoItem>
            <GradLinearicon className="linearicons-graduation-hat"></GradLinearicon>
            <QuickText>{education}</QuickText>
          </QuickInfoItem>
          <QuickInfoItem>
            <TextLinearicon className="linearicons-text-size"></TextLinearicon>
            {languages.map((lang, i) => {
              return (
                <>
                  {i > 0 && ', '}
                  &nbsp;<QuickText key={i}>{lang}</QuickText>
                </>
              );
            })}
          </QuickInfoItem>
        </QuickInfo>
      </AboutCard>
      <AboutText dangerouslySetInnerHTML={{ __html: html }} />
    </AboutContainer>
  );
};

  
export default About;